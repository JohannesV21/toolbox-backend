/**
 * Controlador de Health Check para la API. Se utiliza para verificar si la API está activa y en funcionamiento.
 * Responde con un mensaje de bienvenida y un estado HTTP 200.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 *
 * @returns {void} - Envía una respuesta HTTP con el estado 200 y un mensaje de bienvenida.
 */
export const WelcomeApi = (req, res) => {
  res.status(200).json({ message: 'Welcome to ToolBox API' })
}
