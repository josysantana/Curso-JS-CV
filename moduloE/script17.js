function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0 ){
        window.alert('Preencha o campo corretamente.')
    }else{
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}