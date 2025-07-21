;(() => {
  // Las funciones de tipo never no deben de terminar exitosamente
  const error = (msg: string): never => {
    throw new Error(msg)
  }

  error('Auxilio!')
})()
