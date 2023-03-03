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