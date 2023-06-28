window.addEventListener('DOMContentLoaded', () =>{
    Array.from(document.getElementsByClassName('subtitulo')).forEach(subtitulo =>{
        //Agrega listener que llama a la función mostrarDatos con la sección en cuestión como argumento
        subtitulo.addEventListener('click', () => mostrarDatos(subtitulo.classList.item(1)));
    });
});

function mostrarDatos(section){
    var sec = document.getElementById(section); //Seccion
    Array.from(document.getElementsByClassName('section')).forEach(seccion =>{
        if (seccion !== sec) seccion.style.display = 'none'; //Oculta todas las secciones excepto la seleccionada
    });
    sec.style.display === 'block' ? sec.style.display = 'none' : sec.style.display = 'block';
}