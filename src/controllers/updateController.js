const Update = require('../models/updateFormModel')
const userModel = require('../models/userModel')

const updateController = {
    updateData: async (req, res) => {
        const update = new Update(req.body, req.session.user._id)
        await update.checkData()
        if (update.error_list.length > 0){
            for (let e of update.error_list){
                Object.entries(e).forEach(([field, msg]) => {
                    req.flash(`${field}Error`, msg)
                })
            }
            res.redirect('/account/profile/editProfile')
        } else{
            try{
                const updatedUser = await userModel.findOneAndUpdate({username: req.session.user.username}, {'$set': update.newData}, {'new': true})
                req.session.user = updatedUser
                res.redirect('/account/profile')
            } catch(e){
                console.log('Erro ao atualizar os dados.', e)
            }
        }
    }
}

module.exports = updateController
