const ancient1 = document.querySelector('.Azathoth');
const ancient2 = document.querySelector('.Cthulthu');
const ancient3 = document.querySelector('.IogSothoth');
const ancient4 = document.querySelector('.ShubNiggurath');

ancient1.addEventListener('click', () =>{
    ancient1.classList.add('border');
    ancient2.classList.remove('border');
    ancient3.classList.remove('border');
    ancient4.classList.remove('border');
})
ancient2.addEventListener('click', () =>{
    ancient2.classList.add('border');
    ancient1.classList.remove('border');
    ancient3.classList.remove('border');
    ancient4.classList.remove('border');
})
ancient3.addEventListener('click', () =>{
    ancient3.classList.add('border');
    ancient2.classList.remove('border');
    ancient1.classList.remove('border');
    ancient4.classList.remove('border');
})
ancient4.addEventListener('click', () =>{
    ancient4.classList.add('border');
    ancient2.classList.remove('border');
    ancient3.classList.remove('border');
    ancient1.classList.remove('border');
})

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');

easy.addEventListener('click', () => {
    easy.classList.add('back');
    medium.classList.remove('back');
    hard.classList.remove('back');
})
medium.addEventListener('click', () => {
    easy.classList.remove('back');
    medium.classList.add('back');
    hard.classList.remove('back');
})
hard.addEventListener('click', () => {
    easy.classList.remove('back');
    medium.classList.remove('back');
    hard.classList.add('back');
})