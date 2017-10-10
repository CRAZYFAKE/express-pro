const fs = require('fs');
const is = require('is_js');
const path = require('path');

module.exports = function(app, routesPath) {
    const routes = fs.readdirSync(routesPath)
    routes.filter(names => {
        return (names) && (names.indexOf('.js') !== -1) && (is.not.empty(names))
    })
    .forEach(file => {
        const fileName = file.split('.js')[0];
        const router = require(`${routesPath}/${file}`);
        if (fileName === 'index') {
            app.use('/', router)
        } else {
            app.use(`/${fileName}`, router)
        }
    })
}