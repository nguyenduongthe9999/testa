const apiRouter = require('./Api') 
// const Course = require('../app/modules/Course')
function route(app) {
  app.use('/api',apiRouter)
}

module.exports = route;
