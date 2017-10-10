const mongoose = require('mongoose')
const config   = require('./config/index')

const connectionString = config.mongodb

const options = {
    useMongoClient: true,
    native_parser: true,
    autoReconnect: true,
    poolSize: 5,
}

mongoose.Promise = require('bluebird')

mongoose.connect(connectionString, options, function(err) {
    if (err) {
        console.log('[mongoose log] Error connecting to: ', + connectionString + '. ' + err)
        return process.exit(1)
    } else {
        return console.log('[mongoose log] Successfully connected to:', connectionString )
    }
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'mongoose connection error:'))

db.once('open', function() {
    return console.log('[mongoose log] open success')
})

module.exports = db