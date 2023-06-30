
//esto agrega  a la pantalla el valor del boton de la calculadora que toquemos 
function ejecutar(valor){
    document.getElementById("vista").value += valor
}

function eliminar(){
    document.getElementById("vista").value = ''
}

function calcular(){
    const valorVista = document.getElementById('vista').value
    const resultado = eval(valorVista)
    document.getElementById('vista').value = resultado
}