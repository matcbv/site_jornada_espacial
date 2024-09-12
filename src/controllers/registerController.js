const Register = require('../models/registerFormModel')
const nodemailer = require('nodemailer')
const path = require('path')
const fs = require('fs')

const registerController = {
    userData: '',
    code: '',
    registerData: '',

    signup: async (req, res) => {
        const register = new Register(req.body)
        await register.checkData()
        if (register.error_list.length > 0){
            for (let e of register.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
                return res.redirect('/account/signup')
            }
        } else {
            this.registerData = register.data
            this.userData = register
            this.code =  codeGenerator()
            sendVerifEmail(this.code, register.data.email, register.data.username)
            return res.redirect('/account/signup/validation')
        }
    },

    validation: (req, res) => {
        if (req.body.code === this.code){
            this.userData.saveData()
            req.flash('registerMsg', 'Cadastro realizado com sucesso!')
            return res.redirect('/account/signin')
        } else{
            req.flash('codeError', 'Código inválido')
            return res.redirect('/account/signup/validation')
        }
    },

    resendVerifEmail: async (req, res) => {
        await sendVerifEmail(this.code, this.registerData.email, this.registerData.username)
        res.redirect('/account/signup/validation')
    }
}

// Função para gerar o código de criação da conta:
function codeGenerator(){
    let code = ''
    for(let i=0; i<=5; i++){
        code += String.fromCharCode((Math.floor(Math.random() * 93 + 33)))
    }
    return code;
}

async function sendVerifEmail(code, receiver, username){
    function getEmail() {
        const filePath = path.resolve(__dirname, '..', 'views', 'includes', 'email.html');
        const data = fs.readFileSync(filePath, 'utf8')
        return data.replace('{{code}}', code).replace('{{username}}', username)
    }

    // Criando um transportador (Remetente):
    const transporter = nodemailer.createTransport({
        // Serviço de hospedagem a ser utilizad o:
        service: 'gmail',
        // Credenciais para autenticação:
        auth: {
            user: 'sitejornadaespacial@gmail.com',
            pass: `${process.env.EMAILPASSWORD}`
        }
    })

    // Parâmetros para o envio do email:
    const emailParams = {
        from: 'sitejornadaespacial@gmail.com',
        to: receiver,
        subject: 'Cadastro em Jornada Espacial 🚀',
        // Utilizando o encodeURIComponent para codificação de caracteres não alfanuméricos:
        html: getEmail()
    }
    
    try{
        // Realizando o envio do email:
        await transporter.sendMail(emailParams)
    } catch (e){
        console.log('Erro ao enviar o email.', e)
    }
}

module.exports = registerController
