function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else { 
        var sex = document.getElementsByName('radiosex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'masculino'
            if (idade >0 && idade <= 13){
                //crianca
                img.setAttribute('src', 'imagem/M menino.jpg')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'imagem/adolescente-menino.jpg')
            } else if (idade <= 60){
                //adulto
                img.setAttribute('src', 'imagem/homem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagem/Homem Idoso.jpg')
            }                
        } else {
            genero = 'feminino'
            if (idade >0 && idade <= 13){
                //crianca
                img.setAttribute('src', 'imagem/M menina.jpg')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'imagem/adolescente-menina.jpg')
            } else if (idade <= 60){
                //adulto
                img.setAttribute('src', 'imagem/M mulher.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagem/Mulher idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Selecionado ${genero} com ${idade} anos`
        res.appendChild(img)

    }       

}