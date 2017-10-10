const DB_NAME = 'test'

module.exports = {
    // 开发环境
    'development': {
        'port': '3333',
        'mongodb': 'mongodb://127.0.0.1:27017/' + DB_NAME,
        'PimageUrl': 'http://127.0.0.1:3333'
    },
    // 测试
    'test': {
        'port': '3333',
        'mongodb': 'mongodb://127.0.0.1:27017/' + DB_NAME,
        'PimageUrl': 'http://192.168.2.29:3333'
    },
    'developmenttest': {
        'port': '3333',
        'mongodb': 'mongodb://127.0.0.1:27017/' + DB_NAME,
        'PimageUrl': 'http://101.200.216.214:3333'
    }
}[process.env.NODE_ENV || 'development']
