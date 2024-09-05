const Register = require('../models/registerFormModel')
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')

const registerController = {
    signup: (req, res) => {
        const registerClass = new Register(req.body)
        const errorList = registerClass.checkData()
        if (errorList.length > 0){
            for (let e of errorList){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
        } else {
            const code = codeGenerator()
            verificationEmail(registerClass.data.email, code)
            registerClass.saveData()
        }
        res.redirect('/signin/register')
    }
}

// Função para gerar o código de criação da conta:
function codeGenerator(){
    let code = ''
    for(let i=0; i<=8; i++){
        code += String.fromCharCode((Math.floor(Math.random() * 93 + 33)))
    }
    return code;
}

async function verificationEmail(receiver, code){

    function getEmail() {
        const filePath = path.resolve(__dirname, '..', 'views', 'profile', 'email.html');
        const data = fs.readFileSync(filePath, 'utf8')
        return data.replace('{{code}}', code);
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
