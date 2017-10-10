'use strict'

module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, token')
    res.api = (dataContent, successMsg) => {
        return res.json({
            status: 1,
            msg: successMsg || 'success',
            data: dataContent || {}
        })
    }

    /**
     * 向客户端发送请求失败的响应
     */
    res.api_err = (err) => {
        console.log(err)
        if (typeof err === 'string') {
            return res.json({
                status: 0,
                msg: err || 'database error',
                data: {}
            })
        } else if (typeof err === 'object') {
            return res.json({
                status: err.code || 0,
                msg: err.msg || 'database error',
                data: {}
            })
        }
    }
    next()
}
