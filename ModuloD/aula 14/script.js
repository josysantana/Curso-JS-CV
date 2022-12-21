function carregar() {
    var msg = window.document.getElementById(msg)
    var img = window.document.getElementById(imagem)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <= 12){
        img.src = 'image/manha.jpg'
        document.body.style.background = '#e2cdf9'
    } else if(hora >= 13 && hora <= 18){
        img.src = 'image/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'image/noite.jpg'
        document.body.style.background = '#515154'
    }
}