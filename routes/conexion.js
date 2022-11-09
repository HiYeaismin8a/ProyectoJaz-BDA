const mongoose = require('mongoose');
const redis = require('redis');

const mongo = () => {
  return mongoose.connect('mongodb+srv://H8A:Cotorrito2@cluster0.ihz92os.mongodb.net/gestionEscolar_lab8?retryWrites=true&w=majority');
};

const conRedis = () => {
  const client = redis.createClient();
  return client;
};

module.exports = { mongo, redis: conRedis };