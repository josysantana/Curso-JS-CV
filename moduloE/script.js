function contar(){
    var inicio = document.getElementById('init')
    var final = document.getElementById('fini')
    var passo = document.getElementById('step')

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0 ){
        window.alert('Preencha todos os campos corretamente.')
    }else{
        res.innerHTML = "Contando..."
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        
        if (p <= 0){
            window.alert("Impossível contar. Considerando PASSO 1")
            p = 1
        }
        
        if (i < f ) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
                }
        }
        else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
       res.innerHTML += `\u{1F3C1}`
}
}