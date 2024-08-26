import axios from 'axios'
import 'dotenv/config'

/**
 * URL base para las peticiones HTTP, obtenida de las variables de entorno.
 * @constant {string}
 */
export const BACK_URL = process.env.API_TOOLBOX

/**
 * Objeto que encapsula los métodos HTTP proporcionados por Axios.
 * Permite realizar peticiones HTTP de tipo GET, POST, PUT y DELETE.
 *
 * @namespace
 * @property {Function} get - Método para realizar peticiones HTTP GET.
 * @property {Function} post - Método para realizar peticiones HTTP POST.
 * @property {Function} put - Método para realizar peticiones HTTP PUT.
 * @property {Function} delete - Método para realizar peticiones HTTP DELETE.
 */
export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}
