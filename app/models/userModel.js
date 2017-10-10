'use strict'

const mongoose = require('mongoose')
const Promise = require('bluebird')
const Schema = mongoose.Schema
const VALUE = require('../utils/value.js')

const UserSchema = new Schema({
    uid: {type: String, trim: true, index: true},
    // 注册手机号
    phone: {type: String, trim: true, index: true, unique: true, required: true},
    
}, { versionKey: '_somethingElse' })


UserSchema.plugin(require('./plugin/common'))
// UserSchema.plugin(require('./hooker/update.js'))

const User = mongoose.model(VALUE.MODELS.USER, UserSchema)

require('./hooker/update.js')(User)

Promise.promisifyAll(User)
Promise.promisifyAll(User.prototype)

module.exports = User
