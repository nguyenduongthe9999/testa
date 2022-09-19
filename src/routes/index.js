const apiRouter = require('./Api') 
// const Course = require('../app/modules/Course')
function route(app) {
  app.use('/',apiRouter)
}

module.exports = route;
