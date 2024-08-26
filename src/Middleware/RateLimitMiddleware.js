import rateLimit from 'express-rate-limit'

/**
 * Middleware de limitación de Peticiones.
 *
 * Limita la cantidad de solicitudes que un cliente puede realizar
 * en un período de tiempo determinado para proteger el servidor
 * de sobrecargas.
 *
 * El límite está configurado para permitir un máximo de 100 solicitudes
 * por IP en una ventana de 1 minuto.
 *
 * @constant {Object} limiter - Configuración del middleware de limitación de tasa.
 * @property {number} windowMs - La ventana de tiempo en milisegundos durante la cual
 *                                se limita el número de solicitudes. En este caso, 60,000 ms (1 minuto).
 * @property {number} max - El número máximo de solicitudes permitidas por IP durante la ventana de tiempo.
 * @property {string} message - Mensaje de respuesta que se envía cuando se excede el límite de solicitudes.
 * @property {boolean} headers - Si se deben incluir encabezados en la respuesta para informar sobre el estado
 *                                de la limitación de tasa.
 *
 * @returns {function} Middleware que aplica la limitación de peticiones.
 */
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100, // Límite peticiones por IP por minuto
  message: 'Too many requests from this IP, please try again later.',
  headers: true
})

export default limiter
