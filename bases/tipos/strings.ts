;(() => {
  const batman: string = 'Batman'
  const linternaVerde: string = 'Linterna verde'
  const volcanNegro: string = `Héroe: Volcan Negro`

  console.log({ batman, linternaVerde, volcanNegro })

  console.log(batman.toUpperCase())
  console.log(`I'm ${batman}`)
  console.log(batman[10]?.toUpperCase() || 'No existe esa posición') // ? → Funciona para ejecutar una acción solo si existe
})()
