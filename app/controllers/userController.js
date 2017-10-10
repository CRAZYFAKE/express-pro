const UserService = require('../services/userService.js')

exports.api = {
    // 注册
    register: (req, res, next) => {
        let phone = req.body.phone
        let passwd = req.body.password
        let verifcode = req.body.verifcode
        return UserService.create(phone, passwd, verifcode)
        .then(result => {
            return res.api(result)
        })
        .catch(err => {
            return res.api_err(err)
        })
    },
    update: (req, res, next) => {
        let id = req.body.id
        let phone = req.body.phone
        let passwd = req.body.password
        let verifcode = req.body.verifcode
        return UserService.update(id, phone, passwd, verifcode)
        .then(result => {
            return res.api(result)
        })
        .catch(err => {
            return res.api_err(err)
        })
    }
}