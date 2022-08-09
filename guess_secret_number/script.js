'use strict';
/*
document.querySelector('.guessing1').textContent="Correct number!";

document.querySelector('.guess').value="3";
*/
//Функция Math.trunc() возвращает целую часть числа путём удаления всех дробных знаков
/*
Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно)
до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации 
 случайных чисел; оно не может быть выбрано или сброшено пользователем.
*/
let secretNumber=Math.trunc(Math.random()*20)+1;

let score2=20;
let highscore2=0;
document.querySelector('.btn-success').addEventListener('click', function () {
  /*  console.log(document.querySelector('.guess').value)

    document.querySelector('.guessing1').textContent='Correct Number';*/
    let guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

   if(!guess){
       document.querySelector('.guessing1').textContent='No number';
   }
   else if(guess===secretNumber){
     document.querySelector('.guessing1').textContent='Correct Number';
     document.querySelector('.question_mark').textContent=secretNumber;

     //change color to green
     document.querySelector('body').style.backgroundColor='green';
    if(score2>highscore2){
    highscore2=score2;
    document.querySelector('.highscore').textContent=highscore2;
  }
  
   }
   else if(guess!==secretNumber){

    if(score2>1){
      document.querySelector('.guessing1').textContent=guess>secretNumber?'Too High':'Too low';
      score2--;
    document.querySelector('.score').textContent=score2;
    }

    else {
      document.querySelector('.guessing1').textContent='You lost the game';
    }
   }
   /*else if(guess>secretNumber){
     if(score2>1){
    document.querySelector('.guessing1').textContent='Too high';
    score2--;
    document.querySelector('.score').textContent=score2;
    }
    else {
      document.querySelector('.guessing1').textContent='You lost the game';
    }
   }

   else if(guess<secretNumber){
     if(score2>1){
    document.querySelector('.guessing1').textContent='Too low';
    score2--;
    document.querySelector('.score').textContent=score2;
   }
 
   else {
    document.querySelector('.guessing1').textContent='You lost the game';
  }
  }
  */
});
//change button 
document.querySelector('.butt_one').addEventListener('click',function(){
score2=20; 
secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.guessing1').textContent='Start guessing ...';
document.querySelector('.score').textContent=score2;
document.querySelector('.question_mark').textContent='?';
document.querySelector('.guess').textContent='';
document.querySelector('body').style.backgroundColor='pink';
})