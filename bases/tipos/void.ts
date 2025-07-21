;(() => {
  // Si la funcion no tiene un return implicito, es undefinend
  function callBatman(): void {}
  const callSuperman = (): void => {}

  const a = callBatman()
  const b = callSuperman()

  console.log({ a, b })
})()
