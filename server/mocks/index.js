// istanbul ignore file

// User
const userJSON = require('./usuarios');
const userRestrictionsJSON = require('./usuarios/restricciones');
const userPurchasesJSON = require('./usuarios/compras');

// Level
const levelJSON = require('./nivel');

// Payments
const paymentsJSON = require('./transacciones');

// Shipments
const shipmentsJSON = require('./envios');

class MockUtils {
  constructor() {
    this.basePath = './mocks';
  }

  _readJSON(jsonFile, parameter = null, timeout = 1000, notFoundErrorMessage = '', response) {
    return new Promise((resolve, reject) => {
      try {
        if (!jsonFile || (parameter && !jsonFile[parameter])) {
          const error = new Error(notFoundErrorMessage);
          error.status = 404;
          throw error;
        }
        setTimeout(() => {
          const data = parameter ? jsonFile[parameter] : jsonFile
          // resolve(data);
          response?.status(200).send({ status: "OK", data })
        }, timeout);
      } catch (error) {
        response.status(404).send({ status: "error", data: notFoundErrorMessage })
      }
    });
  }

  getUser() {
    return this._readJSON(userJSON);
  }

  getUserRestrictions(userId, response) {
    return this._readJSON(userRestrictionsJSON, userId, 3000, `Could not find restrictions for user of id ${userId}`, response);
  }

  getUserPurchases(userId, response) {
    return this._readJSON(userPurchasesJSON, userId, 1500, `Could not find purchases for user of id ${userId}`, response);
  }

  getLevel(levelId, response) {
    return this._readJSON(levelJSON, levelId, 500, `Could not find level of id "${levelId}"`, response);
  }

  getShipment(shipmentId, response) {
    return this._readJSON(shipmentsJSON, shipmentId, 1200, `Could not find shipment of id ${shipmentId}`, response);
  }

  getPayment(paymentId, response) {
    return this._readJSON(paymentsJSON, paymentId, 2200, `Could not find payment of id ${paymentId}`, response);
  }


}


module.exports = MockUtils
