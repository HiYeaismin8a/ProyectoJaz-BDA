const mongoose = require('mongoose');
const redis = require('redis');

const mongo = () => {
  return mongoose.connect('mongodb://localhost:27017/gestionEscolar_lab8');
};

const conRedis = () => {
  const client = redis.createClient();
  return client;
};

module.exports = { mongo, redis: conRedis };