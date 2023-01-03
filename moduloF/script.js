function calculo(){
    var gas = document.getElementById('g')
    var etanol = document.getElementById('e')
    
    if (gas.value.length == 0 || etanol.value.length == 0){
        window.alert('Preencha todos os campos corretamente.')
    }else{
        res.innerHTML = ''
        var g = Number(gas.value)
        var e = Number(etanol.value)
        
        let result = e / g
        
        if (result > 0.7 ) {
            res.innerHTML = "Abasteça com etanol." 
        }
        else {
            res.innerHTML = "Abasteça com gasolina."
        }
    }
}      