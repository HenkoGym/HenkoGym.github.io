const formulario = document.getElementById('formulario');
const regirstro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();

     await fetch('https://sheet.best/api/sheets/08836198-e689-4e3e-94c4-43d2899ecd25', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Fecha": formulario.fecha.value,
            "Altura": formulario.altura.value,
            "Peso": formulario.peso.value,
            "Edad": formulario.edad.value,
            "Objetivo": formulario.objetivo.value


        })
    });

    regirstro.classList.remove('activo');
    exito.classList.add('activo');

})