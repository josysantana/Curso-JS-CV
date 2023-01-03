let numero = document.getElementById('num')
let lista = document.querySelector('select#vet')
let res = document.getElementById('res')
let vetor = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, vetor)){
        vetor = numero
        
    } else{
        window.alert('nada')
    }
}