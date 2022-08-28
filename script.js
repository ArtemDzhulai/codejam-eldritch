const ancient1 = document.querySelector('.Azathoth');
const ancient2 = document.querySelector('.Cthulthu');
const ancient3 = document.querySelector('.IogSothoth');
const ancient4 = document.querySelector('.ShubNiggurath');

const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');

const cold = document.querySelector('.cold');

const bg = document.querySelector('.bg');

const card = document.querySelector('.card');

ancient1.addEventListener('click', () =>{
    ancient1.classList.add('border');
    medium.classList.remove('disp');
    bg.classList.add('disp');
    cold.classList.add('disp');
    medium.classList.remove('back');
})

medium.addEventListener('click', () => {
    medium.classList.add('back');
    cold.classList.remove('disp');
    bg.classList.add('disp');
    card.classList.add('disp');
})

cold.addEventListener('click', () => {
    bg.classList.remove('disp');
    cold.classList.add('disp');
})


const blue = [
    {
      "id": "blue1",
      "difficulty": "hard",
      "color":"blue",
      "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue1.png?raw=true')"
    },
    {
        "id": "blue2",
        "difficulty": "hard",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue2.png?raw=true')"
    },
    {
        "id": "blue3",
        "difficulty": "easy",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue3.png?raw=true')"
    },
    {
        "id": "blue4",
        "difficulty": "easy",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue4.png?raw=true')"
    },
    {
        "id": "blue5",
        "difficulty": "easy",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue5.png?raw=true')"
    },
    {
        "id": "blue6",
        "difficulty": "hard",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue6.png?raw=true')"
    },
    {
        "id": "blue7",
        "difficulty": "normal",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue7.png?raw=true')"
    },
    {
        "id": "blue8",
        "difficulty": "hard",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue8.png?raw=true')"
    },
    {
        "id": "blue9",
        "difficulty": "normal",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue9.png?raw=true')"
    },
    {
        "id": "blue10",
        "difficulty": "easy",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue10.png?raw=true')"
    },
    {
        "id": "blue11",
        "difficulty": "normal",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue11.png?raw=true')"
    },
    {
        "id": "blue12",
        "difficulty": "normal",
        "color":"blue",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/blue/blue12.png?raw=true')"
    }
  ]


  const brown = [
    {
      "id": "brown1",
      "difficulty": "normal",
      "color":"brown",
      "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown1.png?raw=true')"
    },
    {
        "id": "brown2",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown2.png?raw=true')"
    },
    {
        "id": "brown3",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown3.png?raw=true')"
    },
    {
        "id": "brown4",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown4.png?raw=true')"
    },
    {
        "id": "brown5",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown5.png?raw=true')"
    },
    {
        "id": "brown6",
        "difficulty": "hard",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown6.png?raw=true')"
    },
    {
        "id": "brown7",
        "difficulty": "hard",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown7.png?raw=true')"
    },
    {
        "id": "brown8",
        "difficulty": "hard",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown8.png?raw=true')"
    },
    {
        "id": "brown9",
        "difficulty": "hard",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown9.png?raw=true')"
    },
    {
        "id": "brown10",
        "difficulty": "hard",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown10.png?raw=true')"
    },
    {
        "id": "brown11",
        "difficulty": "easy",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown11.png?raw=true')"
    },
    {
        "id": "brown12",
        "difficulty": "easy",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown12.png?raw=true')"
    },
    {
        "id": "brown13",
        "difficulty": "easy",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown13.png?raw=true')"
    },
    {
        "id": "brown14",
        "difficulty": "easy",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown14.png?raw=true')"
    },
    {
        "id": "brown15",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown15.png?raw=true')"
    },
    {
        "id": "brown16",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown16.png?raw=true')"
    },
    {
        "id": "brown17",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown17.png?raw=true')"
    },
    {
        "id": "brown18",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown18.png?raw=true')"
    },
    {
        "id": "brown19",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown19.png?raw=true')"
    },
    {
        "id": "brown20",
        "difficulty": "normal",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown20.png?raw=true')"
    },
    {
        "id": "brown21",
        "difficulty": "easy",
        "color":"brown",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/brown/brown21.png?raw=true')"
    }
  ]


  const green = [
    {
      "id": "green1",
      "difficulty": "easy",
      "color":"green",
      "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green1.png?raw=true')"
    },
    {
        "id": "green2",
        "difficulty": "hard",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green2.png?raw=true')"
    },
    {
        "id": "green3",
        "difficulty": "hard",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green3.png?raw=true')"
    },
    {
        "id": "green4",
        "difficulty": "hard",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green4.png?raw=true')"
    },
    {
        "id": "green5",
        "difficulty": "hard",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green5.png?raw=true')"
    },
    {
        "id": "green6",
        "difficulty": "hard",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green6.png?raw=true')"
    },
    {
        "id": "green7",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green7.png?raw=true')"
    },
    {
        "id": "green8",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green8.png?raw=true')"
    },
    {
        "id": "green9",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green9.png?raw=true')"
    },
    {
        "id": "green10",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green10.png?raw=true')"
    },
    {
        "id": "green11",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green11.png?raw=true')"
    },
    {
        "id": "green12",
        "difficulty": "easy",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green12.png?raw=true')"
    },
    {
        "id": "green13",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green13.png?raw=true')"
    },
    {
        "id": "green14",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green14.png?raw=true')"
    },
    {
        "id": "green15",
        "difficulty": "normal",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green15.png?raw=true')"
    },
    {
        "id": "green16",
        "difficulty": "easy",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green16.png?raw=true')"
    },
    {
        "id": "green17",
        "difficulty": "easy",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green17.png?raw=true')"
    },
    {
        "id": "green18",
        "difficulty": "easy",
        "color":"green",
        "linkis": "url('https://github.com/ArtemDzhulai/codejam-eldritch/blob/main/assets/MythicCards/green/green18.png?raw=true')"
    }
  ]

  function getRandomIntInclusivegreen() {
    return Math.floor(Math.random() * (13 - 0 + 1)) + 0; //Максимум и минимум включаются
  }
  let i = getRandomIntInclusivegreen();

  function getRandomIntInclusivebrown() {
    return Math.floor(Math.random() * (12 - 0 + 1)) + 0; //Максимум и минимум включаются
  }
  let a = getRandomIntInclusivebrown();

  function getRandomIntInclusiveblue() {
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0; //Максимум и минимум включаются
  }
  let b = getRandomIntInclusiveblue();

  let stage1A = [green[i]['linkis'], blue[b]['linkis'], brown[a]['linkis'], brown[a+1]['linkis'], brown[b+4]['linkis'], blue[b+1]['linkis'], brown[a+2]['linkis'], brown[a+3]['linkis'], green[i+1]['linkis'], green[i+2]['linkis'], brown[a+5]['linkis'], green[i+3]['linkis'], brown[a+7]['linkis'], green[i+4]['linkis'], brown[a+8]['linkis'], brown[a+6]['linkis']];
   
let o = -1;
bg.addEventListener('click', () => {
    o = o+1;
    card.classList.remove('disp');
    card.style.backgroundImage = stage1A[o];
    if (o == 15){
        bg.classList.add('disp1');
    }
})