let zonas = document.getElementById("distritos");
let cantidad = document.getElementById("cantidad");
let ivaFinal;
let zonasFinal;
let resu = document.getElementById("result");

function validarCantidadKwh() {
  let cantidad = document.getElementById("cantidad");
  if (cantidad.value <= 0) {
    alert("El campo cantidad tiene que ser mayor a 0");
    return false;
  } else {
    return true;
  }
}

function validarDistritos() {
  let optForm = document.forms["frmCalc"]["distritos"].selectedIndex;
  if (optForm == undefined || optForm == 0) {
    alert("Debe seleccionar una opción en el campo distritos");
    return false;
  } else {
    return true;
  }
}

function validarCheckbox() {
  if (document.getElementById("usuarios-prueba").checked) {
    alert("Debe escoger un Tipo de Usuario");
    return false;
  } else {
    return true;
  }
}

function calcularKwh() {
  if (validarCheckbox()) {
    if (validarCantidadKwh()) {
      if (validarDistritos()) {
        let flag = 0;
        let iva = document.querySelector(
          'input[name="usuarios"]:checked'
        ).value;
        if (iva == "residencial") {
          ivaFinal = 0.21;
        }
        if (iva == "industrial") {
          ivaFinal = 0.27;
        }

        if (zonas.value == "distrito-centro") {
          zonasFinal = 5.8;
          flag = 1;
        }
        if (zonas.value == "distrito-sur") {
          zonasFinal = 5.4;
          flag = 1;
        }
        if (zonas.value == "distrito-oeste") {
          zonasFinal = 5.35;
          flag = 1;
        }
        if (zonas.value == "distrito-norte") {
          zonasFinal = 5.6;
          flag = 1;
        }

        resultado = 102 + cantidad.value * zonasFinal * (1 + ivaFinal);
        resultadoDecimal = resultado.toFixed(2);

        if (flag == 1) {
          resu.innerText = `$${resultadoDecimal}`;
        }
      }
    }
  }
}
