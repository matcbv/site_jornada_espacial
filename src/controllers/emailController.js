const nodemailer = require('nodemailer')

const emailController = {
    _code: '',
    _userData: '',
    _emailHTML: '',

    // Função para gerar o código de criação da conta:
    codeGenerator: () => {
        let code = ''
        for(let i=0; i<=5; i++){
            code += String.fromCharCode((Math.floor(Math.random() * 93 + 33)))
        }
        console.log(code)
        return code;
    },

    sendVerifEmail: async (userData, emailHTML) => {
        emailController._code = emailController.codeGenerator()
        console.log(emailController._code)
        
        if (userData && emailHTML){
            emailController._userData = userData
            emailController._emailHTML = emailHTML.replace('{{code}}', emailController._code).replace('{{username}}', userData.username)
        }

        // Criando um transportador (Remetente):
        const transporter = nodemailer.createTransport({
            // Serviço de hospedagem a ser utilizado:
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
            to: emailController._userData.email,
            subject: 'Jornada Espacial 🚀',
            // Utilizando o encodeURIComponent para codificação de caracteres não alfanuméricos:
            html: emailController._emailHTML
        }

        try{
            // Realizando o envio do email:
            await transporter.sendMail(emailParams)
        } catch (e){
            console.error('Erro ao enviar o email.', e)
        }

        return emailController._code
    },
    
    resendVerifEmail: async (req, res) => {
        const prevPage = req.query.prevPage
        await emailController.sendVerifEmail()
        return res.redirect(prevPage)
    }
}

module.exports = emailController
