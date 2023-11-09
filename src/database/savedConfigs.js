const DB = require('./db.json')
const {saveToDatabase} = require("./utils");

const getAllConfigs = () => {
  return DB.savedConfigs
}

const createNewConfig = (newConfig) => {
  DB.savedConfigs.push(newConfig)
  saveToDatabase(DB)
  return newConfig
}
module.exports = {
  getAllConfigs,
  createNewConfig
}