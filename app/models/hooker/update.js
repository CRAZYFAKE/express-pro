'use strict'

const hooker = require('hooker')


module.exports = (model) => {
    hooker.hook(model, ['update', 'findOneAndUpdate'], {
        pre: function() {
            if (arguments[1]['$set']) {
                arguments[1]['$set'].updatedAt = Date.now()
            } else {
                arguments[1].updatedAt = Date.now()
            }
        }
    })
}
