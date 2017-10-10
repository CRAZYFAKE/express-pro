const UserModel = require('../models/userModel.js')

let UserService = {}

UserService.create = (phone, passwd, verifcode) => {
    return UserModel.create({
        phone: phone
    })
    .then(re => {
        return Promise.resolve(re)
    })
    .catch(err => {
        return Promise.reject(err)
    })
}

UserService.update = (id, phone, passwd, verifcode) => {
    return UserModel.update({
        _id: id
    }, {
        $set: {
            phone: phone
        }
    })
    .then(re => {
        return Promise.resolve(re)
    })
    .catch(err => {
        return Promise.reject(err)
    })
}

module.exports = UserService
