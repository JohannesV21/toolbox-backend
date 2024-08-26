export const mapError = (error) => {
  if (error.response) {
    // Error con respuesta del servidor
    return {
      status: error.response.status,
      message:
        error.response.data.message ||
        error.response.statusText ||
        'Uknow error',
      type: 'Server Error',
      errorData: error.response.data
    }
  }

  if (!error) {
    // Error sin respuesta del servidor
    return {
      status: 500,
      message: 'No response received from the server',
      type: 'Network Error'
    }
  }
}
