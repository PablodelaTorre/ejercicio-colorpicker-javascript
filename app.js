const inputColor = document.getElementById('inputColor')
const botonVisualizar = document.getElementById('botonVisualizar')
const parrafo = document.getElementById('parrafo')
const cajaColor = document.getElementById('cajaColor')

botonVisualizar.addEventListener('click', () => {
    parrafo.textContent = inputColor.value
    cajaColor.style.backgroundColor = inputColor.value
})