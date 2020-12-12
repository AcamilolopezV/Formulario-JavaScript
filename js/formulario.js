// en caso de que quieras proteger tu codigo descomenta la linea 3 y la linea 63

//(function(){
  var formulario = document.getElementById('formulario'),
      nombre = formulario.nombre,
      correo = formulario.correo,
      sexo = formulario.sexo,
      terminos = formulario.terminos,
      error = document.getElementById('error');

    function validarNombre(e){
      if(nombre.value == '' || nombre.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Digita el Nombre</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarCorreo(e){
      if(correo.value == '' || correo.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Digite el Correo Electronico</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarSexo(e){
      if(sexo.value == '' || sexo.value == null){
        error.style.display = 'block';
        error.innerHTML += '<li>Elegir el Genero</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarTerminos(e){
      if(terminos.checked == false){
        error.style.display = 'block';
        error.innerHTML += '<li>Acepta los Terminos para Continuar</li>';
        e.preventDefault();
      }else{
        error.style.display = 'none';
      }
    }

    function validarFormulario(e){

      error.innerHTML = '';

      validarNombre(e);
      validarCorreo(e);
      validarSexo(e);
      validarTerminos(e);
    }
    
  formulario.addEventListener('submit' , validarFormulario);

//}())