document.addEventListener('DOMContentLoaded', function () {
  let formNota = document.getElementById('formNota');
  let tituloNota = document.getElementById('tituloNota');
  let contenidoNota = document.getElementById('contenidoNota');
  let listaNotas = document.getElementById('listaNotas');
  let buscarNota = document.getElementById('buscarNota');
  let notas = JSON.parse(localStorage.getItem('notas')) || [];
  let idEdicion = null;
  let btnGuardarNota = document.getElementById('btnGuardarNota');

  // Mostrar las notas guardadas
  function mostrarNotas(filtro = '') {
    listaNotas.innerHTML = '';
    let notasFiltradas = notas.filter(nota =>
      nota.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      nota.contenido.toLowerCase().includes(filtro.toLowerCase())
    );

    notasFiltradas.forEach((nota, index) => {
      let divNota = document.createElement('div');
      divNota.classList.add('nota');
      divNota.innerHTML = `
              <h5>${nota.titulo}</h5>
              <p>${nota.contenido}</p>
              <div class="acciones">
                  <button class="editar" onclick="editarNota(${index})">Editar</button>
                  <button class="eliminar" onclick="eliminarNota(${index})">Eliminar</button>
              </div>
          `;
      listaNotas.appendChild(divNota);
    });
  }

  // Agregar o actualizar nota
  formNota.addEventListener('submit', function (e) {
    e.preventDefault();
    let nuevaNota = {
      titulo: tituloNota.value,
      contenido: contenidoNota.value,
    };

    if (idEdicion === null) {
      notas.push(nuevaNota);
    } else {
      notas[idEdicion] = nuevaNota;
      idEdicion = null;
    }

    localStorage.setItem('notas', JSON.stringify(notas));
    formNota.reset();
    btnGuardarNota.textContent = 'Agregar Nota';
    mostrarNotas();
  });

  // Editar nota
  window.editarNota = function (index) {
    idEdicion = index;
    let nota = notas[index];
    tituloNota.value = nota.titulo;
    contenidoNota.value = nota.contenido;
    btnGuardarNota.textContent = 'Actualizar Nota';
  };

  // Eliminar nota
  window.eliminarNota = function (index) {
    notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(notas));
    mostrarNotas();
  };

  // Buscar nota
  buscarNota.addEventListener('input', function () {
    mostrarNotas(buscarNota.value);
  });

  // Inicializar la vista de notas
  mostrarNotas();

  // Elimina la lista de notas en localStorage
  document.getElementById('limpiarNotas').addEventListener('click', function () {
    let lista = localStorage.getItem('notas');
    if (!lista) alert('No hay notas para eliminar.');
    localStorage.removeItem('notas');
    notas = [];
    mostrarNotas();
  });
});
