'use strict'
/**
 * 所有表公用字段
 *
 * - created_at_ms 创建时间戳
 * - created_at 创建时间
 * - updated_at 更新时间
 * - is_deleted 是否已删除
 * - remark 备注
 */
const moment = require('moment')

module.exports = exports = function (schema, options) {
    schema.add({
        //创建年份
        createdYear: {
            type: String,
            require: true
        },
        // 创建月份
        createdMonth: {
            type: String,
            require: true
        },
        // 创建天
        createdDay: {
            type: String,
            require: true
        },
        // 创建时间戳
        createdAtMs: {
            type: Number
        },
        // 创建时间
        createdAt: {
            type: Date,
            default: Date.now
        },
        // 最后修改时间
        updatedAt: {
            type: Date,
            default: Date.now
        },
        // 是否已删除
        isDeleted: {
            type: Boolean,
            default: false
        },
        // 备注
        remark: {
            type: String
        }
    });

    schema.pre('save', function (next) {
        var date = moment().format('YYYY-MM-DD-HH-mm').split('-')
        this.createdAtMs = new Date().getTime()
        this.createdYear = date[0]
        this.createdMonth = date[1]
        this.createdDay = date[2]
        next()
    })

    /**
     * 更新
     */
    schema.pre('update', function(next) {
        /**
         * 官网：http://mongoosejs.com/docs/api.html#query_Query-update
         * Mongoose 4.0 supports pre update hooks via Query middleware.
         * 
         * Query middleware is supported for the following Model and Query functions. 
         * In query middleware functions, this refers to the query.
         * 
         * 在4.0版本中的mongoose中，count、find、find、findOneAndRemove、findOneAndUpdate、update的方法中this是一个Query对象。
         */
        this.update({},{ $set: { updatedAt: new Date() } })
        next()
    })
}
