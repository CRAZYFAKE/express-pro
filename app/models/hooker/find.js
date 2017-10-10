'use strict'

const hooker = require('hooker')

module.exports = (model) => {
    hooker.hook(model, ['find', 'findOne', 'findOneAndUpdate', 'count', 'paginate'], {
        pre: () => {
            arguments[0].isDeleted = false
        }
    })
}