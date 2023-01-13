function resposta(){
let userName = document.getElementById('name')
let randomNumber = Math.floor(Math.random() * 9)
let eightBall = ''
switch(randomNumber){
  case 1:
    console.log('Certamente')
    eightBall = 1
    break
  case 2:
    console.log('É decididamente assim')
    eightBall = 2
    break
  case 3:
    console.log('Resposta nebulosa, tente novamente')
    eightBall = 3
    break
  case 4:
    console.log('Não é possível prever agora')
    eightball = 4
    break
  case 5:
    console.log('Não conte com isso')
    eightBall = 5
    break
  case 6:
    console.log('Minhas fontes dizem não')
    eightball = 6
    break
  case 7:
    console.log('Perspectivas não tão boas')
    eightBall = 7
    break
  case 8:
    console.log('Tudo indica que sim')
    eightBall = 8
    break
  default:
      console.log('Definitivamente não')
      eightBall = 0
  break
  }
userName ? console.log(`Hello ${userName}`):console.log('Hello')
res.style.textAlign = 'center'
res.innerHTML = `Selecionado ${genero} com ${idade} anos`
}