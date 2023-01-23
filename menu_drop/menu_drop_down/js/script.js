'use strict';

document.addEventListener( 'DOMContentLoaded', () => {
    
    const btn = document.querySelector('.drpo-block__btn');
    const list = document.querySelector('.drpo-block__list') 
    
    btn.addEventListener('click', () => {
        list.classList.toggle('show');
    })

})

