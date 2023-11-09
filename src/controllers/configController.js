const configService = require('../services/configService')
const getAllConfigs = (req, res) => {
  const allConfigs = configService.getAllConfigs()
  res.send({status: 'OK', data: allConfigs})
}
const postConfig = (req, res) => {
  const {body} = req
  const newConfig = {
    name: body.name,
    size: body.size,
    drinks: body.drinks,
    counter: body.counter
  }
  const createdConfig = configService.postConfig(newConfig)
  res.status(201).send({
    status: 'OK',
    data: createdConfig
  })
}
module.exports = {
  getAllConfigs,
  postConfig
}