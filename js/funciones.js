function ejercicioFactura () {
  var cantidadItems = 0;
  var subtotal = 0;

  var precioItem = pedirNumero('Ingrese el precio del primer ítem');

  if (precioItem === false) {
    return;
  }

  while (/* ..? */) {
    // COMPLETAR

    precioItem = pedirNumero('Ingrese el precio del siguiente ítem (o 0 para terminar)');
  }

  var descuento = pedirNumero('Ingrese el porcentaje de descuento.');

  // COMPLETAR
}

function ejercicioPrimos() {
  var fecha = pedirFecha('Ingrese la fecha\n(Formato "MM/DD/AAAA"');

  if (fecha === false) {
    return;
  }

  console.log(fecha)

  // COMPLETAR
}

function ejercicioSuperficie() {
  var perimetro = pedirNumero('Ingrese el perímetro');

  if (perimetro === false) {
    return;
  }

  var superficieMaxima;

  console.log(perimetro)

  // COMPLETAR
}

// ----------------------------------------------------------------
// FUNCIONES AUXILIARES

function aplicarDescuento (total, porcentaje) {
  // COMPLETAR
  return total * (100 - porcentaje) / 100
}

function esPrimo (numero) {
  // COMPLETAR
}

function longitudDelLadoContrario (lado, perimetro) {
  // COMPLETAR
}

function superficie (largo, ancho) {
  // COMPLETAR
}

function pedirNumero(mensaje) {
  var input = prompt(mensaje);

  // `input` es `null` si el usuario tocó "Cancelar"
  if (input === null) {
    return false;
  }

  var numero = Number(input);

  if (isNaN(numero) || input === '') {
    alert('No es un número válido')
    return false;
  }

  return numero;
}

function pedirFecha(mensaje) {
  var input = prompt(mensaje);

  // `input` es `null` si el usuario tocó "Cancelar"
  if (input === null) {
    return false;
  }

  var fecha = new Date(input);

  // Una forma de verificar que la fecha sea válida
  if (isNaN(fecha.getDate())) {
    alert('No es una fecha válida')
    return false;
  }

  return fecha;
}
