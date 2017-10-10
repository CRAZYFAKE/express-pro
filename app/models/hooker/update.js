/*
 * @Author: yaoyixiang 
 * @Date: 2017-10-10 17:19:52 
 * @Last Modified by:   yaoyixiang 
 * @Last Modified time: 2017-10-10 17:19:52 
 */
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
