let coeur = document.querySelectorAll('.heart')
let coeurRed = document.querySelectorAll('.heartSelected')

for(let i = 0; i < 4; i++){
coeur[i].addEventListener('click', function(){
    coeur[i].style.display = 'none'
    coeurRed[i].style.display = 'block'
})
}

for(let i = 0; i < 4; i++){
coeurRed[i].addEventListener('click', function(){
    coeurRed[i].style.display = 'none'
    coeur[i].style.display = 'block'
})
}