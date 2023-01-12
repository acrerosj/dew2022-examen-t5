const form = document.forms.suscripcion;
const precio = document.getElementById('precio');

const fsTemas = form.querySelectorAll('fieldset')[2];

TEMAS.forEach(tema => {
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'tema[]';
    input.id = tema;
    input.value = tema;
    let label = document.createElement('label');
    label.setAttribute('for',tema);
    label.textContent = tema;
    fsTemas.append(input, label);
})

document.querySelectorAll("input[name='tipo'").forEach(input => {
    input.addEventListener('change', ()=> {
        precio.textContent = PRECIOS[form.tipo.value];
        if (form.tipo.value == 'elite') {
            let inputTemas = document.querySelectorAll("input[name='tema[]']"); 
            inputTemas.forEach(input => input.checked = true);
        }
    });
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('enviando');
    form.nombre.value = form.nombre.value.toUpperCase();
    let marcados = document.querySelectorAll("input[name='tema[]']:checked");    
    console.log(marcados);
    let cantidad;
    switch (form.tipo.value) {
        case 'basico':  cantidad = 1;
                        break;
        case 'estandar':  cantidad = 3;
                        break;
        case 'premium':  cantidad = 6;
                        break;
        default:    cantidad = TEMAS.length;
    }
    if (form.domiciliar.checked) {
        form.action = 'domiciliar.html';
    }
    if (marcados.length == cantidad) {
        form.submit();
    } else {
        console.log("Debes marcar " + cantidad + " temas.");
    }
});