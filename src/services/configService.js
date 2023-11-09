const configs = require('../database/savedConfigs')
const savedConfig = require('../database/savedConfigs')

const getAllConfigs = () => {
  const allConfigs = configs.getAllConfigs()
  return allConfigs
}
const postConfig = (newConfig) => {
  const configToInsert = {
    ...newConfig
  }
  newConfig = savedConfig.createNewConfig(configToInsert)
  return newConfig
}
module.exports = {
  getAllConfigs,
  postConfig
}