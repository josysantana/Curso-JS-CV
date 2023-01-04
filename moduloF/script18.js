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
        vetor.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O valor ${numero.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Número inválido ou já se encontra na lista.')
    }
    num.value = ''
    num.focus
}

function finish(){
    if(vetor.length == 0){
        window.alert('Nenhum número para finalizar.')
    } else {
        let total = vetor.length
        let ordem = vetor.sort()
        let ultimo = ordem[ordem.length -1]
        let primeiro = ordem[0]
        let soma = 0
        let media = 0
        for(let pos in vetor){
            soma += vetor[pos]
        }
        media = soma / total
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior número informado é ${ultimo}</p>`
        res.innerHTML += `<p> O menor número informado é ${primeiro}</p>`
        res.innerHTML += `<p> A soma dos números informados é ${soma}</p>`
        res.innerHTML += `<p> A média dos números informados é ${media}</p>`
    }


}