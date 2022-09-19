const  Course = require('../modules/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

let listData = []


class apiController {
  // [GET] /

  read(req, res,next) {


    Course.find({})
      .then(courses => {
        res.json(courses)
      })

      .catch(error => {

      })
  }

  create(req,res,next) {
    let dt = req.body
    const data = new Course(dt)
    data.save()
      .then(() => res.json(data))
      .catch(error => {
        
      })
  }

  home(req,res) {
    res.send('hello nodejs reactjs javascript')
  }

}


module.exports = new apiController();
