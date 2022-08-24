const ancient1 = document.querySelector('.Azathoth');
const ancient2 = document.querySelector('.Cthulthu');
const ancient3 = document.querySelector('.IogSothoth');
const ancient4 = document.querySelector('.ShubNiggurath');

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const easy1 = document.querySelector('.easy1');
const medium1 = document.querySelector('.medium1');
const hard1 = document.querySelector('.hard1');
const easy2 = document.querySelector('.easy2');
const medium2 = document.querySelector('.medium2');
const hard2 = document.querySelector('.hard2');
const easy3 = document.querySelector('.easy3');
const medium3 = document.querySelector('.medium3');
const hard3 = document.querySelector('.hard3');

const cold = document.querySelector('.cold');
const cold1 = document.querySelector('.cold1');
const cold2 = document.querySelector('.cold2');
const cold3 = document.querySelector('.cold3');
const cold4 = document.querySelector('.cold4');
const cold5 = document.querySelector('.cold5');
const cold6 = document.querySelector('.cold6');
const cold7 = document.querySelector('.cold7');
const cold8 = document.querySelector('.cold8');
const cold9 = document.querySelector('.cold9');
const cold10 = document.querySelector('.cold10');
const cold11 = document.querySelector('.cold11');

ancient1.addEventListener('click', () =>{
    ancient1.classList.add('border');
    ancient2.classList.remove('border');
    ancient3.classList.remove('border');
    ancient4.classList.remove('border');
    easy.classList.remove('disp');
    medium.classList.remove('disp');
    hard.classList.remove('disp');
    easy1.classList.add('disp');
    medium1.classList.add('disp');
    hard1.classList.add('disp');
    easy2.classList.add('disp');
    medium2.classList.add('disp');
    hard2.classList.add('disp');
    easy3.classList.add('disp');
    medium3.classList.add('disp');
    hard3.classList.add('disp');
})
ancient2.addEventListener('click', () =>{
    ancient2.classList.add('border');
    ancient1.classList.remove('border');
    ancient3.classList.remove('border');
    ancient4.classList.remove('border');
    easy.classList.add('disp');
    medium.classList.add('disp');
    hard.classList.add('disp');
    easy1.classList.remove('disp');
    medium1.classList.remove('disp');
    hard1.classList.remove('disp');
    easy2.classList.add('disp');
    medium2.classList.add('disp');
    hard2.classList.add('disp');
    easy3.classList.add('disp');
    medium3.classList.add('disp');
    hard3.classList.add('disp');
})
ancient3.addEventListener('click', () =>{
    ancient3.classList.add('border');
    ancient2.classList.remove('border');
    ancient1.classList.remove('border');
    ancient4.classList.remove('border');
    easy.classList.add('disp');
    medium.classList.add('disp');
    hard.classList.add('disp');
    easy1.classList.add('disp');
    medium1.classList.add('disp');
    hard1.classList.add('disp');
    easy2.classList.remove('disp');
    medium2.classList.remove('disp');
    hard2.classList.remove('disp');
    easy3.classList.add('disp');
    medium3.classList.add('disp');
    hard3.classList.add('disp');
})
ancient4.addEventListener('click', () =>{
    ancient4.classList.add('border');
    ancient2.classList.remove('border');
    ancient3.classList.remove('border');
    ancient1.classList.remove('border');
    easy.classList.add('disp');
    medium.classList.add('disp');
    hard.classList.add('disp');
    easy1.classList.add('disp');
    medium1.classList.add('disp');
    hard1.classList.add('disp');
    easy2.classList.add('disp');
    medium2.classList.add('disp');
    hard2.classList.add('disp');
    easy3.classList.remove('disp');
    medium3.classList.remove('disp');
    hard3.classList.remove('disp');
})



easy.addEventListener('click', () => {
    easy.classList.add('back');
    medium.classList.remove('back');
    hard.classList.remove('back');
    cold.classList.remove('disp');
})
medium.addEventListener('click', () => {
    easy.classList.remove('back');
    medium.classList.add('back');
    hard.classList.remove('back');
    cold1.classList.remove('disp');
})
hard.addEventListener('click', () => {
    easy.classList.remove('back');
    medium.classList.remove('back');
    hard.classList.add('back');
    cold2.classList.remove('disp');
})

easy1.addEventListener('click', () => {
    easy1.classList.add('back');
    medium1.classList.remove('back');
    hard1.classList.remove('back');
    cold3.classList.remove('disp');
})
medium1.addEventListener('click', () => {
    easy1.classList.remove('back');
    medium1.classList.add('back');
    hard1.classList.remove('back');
    cold4.classList.remove('disp');
})
hard1.addEventListener('click', () => {
    easy1.classList.remove('back');
    medium1.classList.remove('back');
    hard1.classList.add('back');
    cold5.classList.remove('disp');
})

easy2.addEventListener('click', () => {
    easy2.classList.add('back');
    medium2.classList.remove('back');
    hard2.classList.remove('back');
    cold6.classList.remove('disp');
})
medium2.addEventListener('click', () => {
    easy2.classList.remove('back');
    medium2.classList.add('back');
    hard2.classList.remove('back');
    cold7.classList.remove('disp');
})
hard2.addEventListener('click', () => {
    easy2.classList.remove('back');
    medium2.classList.remove('back');
    hard2.classList.add('back');
    cold8.classList.remove('disp');
})

easy3.addEventListener('click', () => {
    easy3.classList.add('back');
    medium3.classList.remove('back');
    hard3.classList.remove('back');
    cold9.classList.remove('disp');
})
medium3.addEventListener('click', () => {
    easy3.classList.remove('back');
    medium3.classList.add('back');
    hard3.classList.remove('back');
    cold10.classList.remove('disp');
})
hard3.addEventListener('click', () => {
    easy3.classList.remove('back');
    medium3.classList.remove('back');
    hard3.classList.add('back');
    cold11.classList.remove('disp');
})