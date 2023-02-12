const MeliService = require("../../MercadolibreService")
const express = require('express');
const router = express.Router();
const mock = new MeliService()

router
const getUser = (req, res) => {
  mock.getUser()
  res.send({
    id_usuario: 1,
    nombre: 'Mercadolibre',
    apellido: 'User',
    nivel: 'ORO',
    imagen: 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png'
  })
}
const getRestrictions = (req, res) => {
  mock.getUserRestrictions(req.params.id, res)
}

const allPurchases = (req, res) => {
  const offset = req.query.page;
  const limit = req.query.limit;
  mock.getUserPurchases(req.params.id, offset, limit, res)
}

const getLevel = (req, res) => {
  mock.getLevel(req.params.type, res)
}

const getShipment = (req, res) => {
  mock.getShipment(req.params.id, res)
}

const getPayment = (req, res) => {
  mock.getPayment(req.params.id, res)
}

module.exports = {
  getUser,
  getRestrictions,
  allPurchases,
  getLevel,
  getShipment,
  getPayment
}