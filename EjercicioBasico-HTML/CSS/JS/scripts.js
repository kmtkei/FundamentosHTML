function enviarMensajeFormulario(){
    const nombre = document.getElementById('nombreContacto').value;
    const mensaje = document.getElementById('mensajeContacto').value;
    const contacto = '\nNombre: '+nombre+'\nMensaje: '+mensaje;
    alert('Mensaje enviado :'+ contacto);
}