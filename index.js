class Auto {
    constructor(nombreDelAuto,precioDelAuto) {
      this.nombreDelAuto = nombreDelAuto
      this.precioDelAuto = precioDelAuto
    }
  }
  
//la compra del auto
  function procesoDeCompraDelAuto() {
    const precioDelAuto = parseFloat(prompt('ingrese el precio del vehiculo'))
    const nombreDelAuto = prompt('ingrese el nombre del vehiculo que compro')
    return new Auto(nombreDelAuto,precioDelAuto)
  }
//pregunta de seguir comprando  
  const Autos = []
     
  let continuaComprandoAutos = true
  while (continuaComprandoAutos) {
    const aut = procesoDeCompraDelAuto()
  
    Autos.push(aut)
  
    const respuesta = prompt('quiere comprar algun autos mas? si/no')
    if (respuesta === 'no') {
        continuaComprandoAutos = false
    }
  }
// total del auto  
  let total = 0
  const precio = Autos.map(p => p.precioDelAuto)
  precio.forEach(p => { total = total + p })
  
  alert('precio total de vehiculo adquirido'   +   total)