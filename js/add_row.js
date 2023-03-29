const agregarFila = () => {
  const table = document.getElementById('tablaprueba');
  const newRow = table.insertRow(-1);
  const newCell = newRow.insertCell(0);
  const selectHTML = 
  '<select style="width: 100%;">'
  +'<option value="opcion0" selected disabled>Seleccione un producto...</option>'
  +'<option value="opcion1">FLEXSOCKS</option>'
  +'<option value="opcion2">SALTO LIBRE 30 MIN.</option>'
  +'<option value="opcion3">SALTO LIBRE 60 MIN.</option>'
  +'<option value="opcion4">SALTO LIBRE TIEMPO ILIMITADO</option>'
  +'<option value="opcion5">PAQUETE AMIGOS / FAMILIAR</option>'
  +'<option value="opcion6">QUEMADOS</option>'
  +'</select>';
  newCell.innerHTML = selectHTML;
};

const eliminarFila = () => {
  const table = document.getElementById('tablaprueba');
  const rowCount = table.rows.length;
  
  if (rowCount <= 1) {
    alert('No se puede eliminar el encabezado');
  } else {
    table.deleteRow(rowCount - 1);
  }
};

const agregarFila2 = () => {
  const table = document.getElementById('tablaprueba2');
  const newRow = table.insertRow(-1);
  const newCell = newRow.insertCell(0);
  const selectHTML = 
  '<select style="width: 100%;">'
  +'<option value="opcion0" selected disabled>Seleccione un producto...</option>'
  +'<option value="opcion1">FLEXSOCKS</option>'
  +'<option value="opcion2">SALTO LIBRE 30 MIN.</option>'
  +'<option value="opcion3">SALTO LIBRE 60 MIN.</option>'
  +'<option value="opcion4">SALTO LIBRE TIEMPO ILIMITADO</option>'
  +'<option value="opcion5">PAQUETE AMIGOS / FAMILIAR</option>'
  +'<option value="opcion6">QUEMADOS</option>'
  +'</select>';
  newCell.innerHTML = selectHTML;
};

const eliminarFila2= () => {
  const table = document.getElementById('tablaprueba2');
  const rowCount = table.rows.length;
  
  if (rowCount <= 1) {
    alert('No se puede eliminar el encabezado');
  } else {
    table.deleteRow(rowCount - 1);
  }
};
////

const agregarFila3 = () => {
  const table = document.getElementById('tablaprueba3');
  const newRow = table.insertRow(-1);
  const newCell = newRow.insertCell(0);
  const selectHTML = 
  '<select style="width: 100%;">'
  +'<option value="opcion0" selected disabled>Seleccione un producto...</option>'
  +'<option value="opcion1">Charola multiusos</option>'
  +'<option value="opcion2">Refresco</option>'
  +'<option value="opcion3">Jamon de pavo</option>'
  +'<option value="opcion4">Leche lala deslactosada</option>'
  +'</select>';
  newCell.innerHTML = selectHTML;
};

const eliminarFila4= () => {
  const table = document.getElementById('tablaprueba4');
  const rowCount = table.rows.length;
  
  if (rowCount <= 1) {
    alert('No se puede eliminar el encabezado');
  } else {
    table.deleteRow(rowCount - 1);
  }
};
//

////

const agregarFila4 = () => {
  const table = document.getElementById('tablaprueba4');
  const newRow = table.insertRow(-1);
  const newCell = newRow.insertCell(0);
  const selectHTML = 
  '<select style="width: 100%;">'
  +'<option value="opcion0" selected disabled>Seleccione un insumo/producto...</option>'
  +'<option value="opcion1">Charola multiusos</option>'
  +'<option value="opcion2">Flexsocks</option>'
  +'<option value="opcion3">Jamon de pavo</option>'
  +'<option value="opcion4">Leche lala deslactosada</option>'
  +'</select>';
  newCell.innerHTML = selectHTML;

  const inputCell = newRow.insertCell(1);
  const inputHTML = '<input type="number" style="width: 100%; type="number">';
  inputCell.innerHTML = inputHTML;
};

const agregarFila42 = () => {
  const table = document.getElementById('tablaprueba4');
  const newRow = table.insertRow(-1);
  const newCell = newRow.insertCell(0);
  const selectHTML = 
  '<select style="width: 100%;">'
  +'<option value="opcion0" selected disabled>Seleccione un producto...</option>'
  +'<option value="opcion1">Calcetas</option>'
  +'<option value="opcion2">Refresco</option>'
  +'<option value="opcion3">Jamon de pavo</option>'
  +'<option value="opcion4">Leche lala deslactosada</option>'
  +'</select>';
  newCell.innerHTML = selectHTML;

  const inputCell = newRow.insertCell(1);
  const inputHTML = '<input type="text" style="width: 100%; type="number">';
  inputCell.innerHTML = inputHTML;
};

const eliminarFila3= () => {
  const table = document.getElementById('tablaprueba3');
  const rowCount = table.rows.length;
  
  if (rowCount <= 1) {
    alert('No se puede eliminar el encabezado');
  } else {
    table.deleteRow(rowCount - 1);
  }
};
//