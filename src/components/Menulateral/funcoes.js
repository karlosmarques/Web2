var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)

//expandir o menu
var btnExp = document.querySelector('#btn-expandir')

var menuSid = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSid.classList.toggle('expandir')
} )
