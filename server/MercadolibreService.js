// istanbul ignore file

/**
 * - Todos estos métodos son asíncronos.
 * - Te recomendamos no modificar estos archivos ya que usaremos una copia para validar el funcionamiento
 * - Si tenés algún problema o pregunta, no dudes en contactar al entrevistador!
 */

const MockUtils = require('./mocks');

class MercadolibreService {
  constructor() {
    this.mockUtils = new MockUtils();
  }

  getUser() {
    return this.mockUtils.getUser();
  }

  getUserRestrictions(userId, response) {
    return this.mockUtils.getUserRestrictions(userId, response);
  }

  async getUserPurchases(userId, limit = 10, offset = 0, response) {
    const purchases = await this.mockUtils.getUserPurchases(userId, response);
    if (offset >= purchases.length) {
      const error = new Error('Bad request');
      error.status = 400;
      throw error;
    }
    
    return {
      total: purchases.length,
      offset,
      limit,
      data: purchases.slice(offset, limit * (offset + 1)),
    };
    
  }

  getLevel(levelId, response) {
    return this.mockUtils.getLevel(levelId, response);
  }

  getShipment(shipmentId, response) {
    return this.mockUtils.getShipment(shipmentId, response);
  }

  getPayment(paymentId, response) {
    return this.mockUtils.getPayment(paymentId, response);
  }
}

module.exports = MercadolibreService;
