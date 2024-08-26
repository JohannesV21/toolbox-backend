export const mapError = (error) => {
  if (error.response) {
    // Error con respuesta del servidor
    return {
      status: error.response.status,
      message: error.response.data.message || error.response.statusText,
      type: 'Server Error',
      errorData: error.response.data
    }
  } else if (error.request) {
    // Error sin respuesta del servidor
    return {
      status: 500,
      message: 'No response received from the server',
      type: 'Network Error'
    }
  } else {
    // Error en la configuración de la solicitud
    return {
      status: null,
      message: error.message || 'Error configuring the request',
      type: 'Configuration Error'
    }
  }
}
