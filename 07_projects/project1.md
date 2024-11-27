# projects related to DOM

## project 1 (color changer)

```javascript
const button=document.querySelectorAll('.button')

const body = document.querySelector("body")
button.forEach(function(buttons){
  console.log(buttons);
  buttons.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)
    switch(e.target.id){
      case 'grey':
        body.style.backgroundColor=e.target.id;
        break
      case 'white':
        body.style.backgroundColor=e.target.id;
        break
      case 'blue':
        body.style.backgroundColor=e.target.id;
        break
      case 'yellow':
        body.style.backgroundColor=e.target.id;
      case 'purple':
        body.style.backgroundColor=e.target.id;
        break
      default:
        break

    }
  })
  
})


```

## project 2 (bmi calculator)
```javascript
const form=document.querySelector('form')
//this usercase will give error
// const height = parseInt( document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()
 const height = parseInt( document.querySelector('#height').value)
 const weight = parseInt( document.querySelector('#weight').value)
 const result =  document.querySelector('#results')

 if(height === ''|| height <0 || isNaN(height))
 {
  result.innerHTML="please give valid height"
 }
 else if(weight === ''|| weight <0 || isNaN(weight))
 {
  result.innerHTML="please give valid weight"
 }
 else{
   const bmi = (weight/((height*height)/10000)).toFixed(2)
   //result
   //result.innerHTML = `<span>${bmi}</span>`
   if(bmi<18.6)
   {
    result.innerHTML = `<span>${bmi}</span><br><span>underweight</span>`
   }
   else if(bmi>=18.6 && bmi<=24.9)
   {
    result.innerHTML = `<span>${bmi}</span><br><span>normal weight</span>`
   }
   else
   {
    result.innerHTML = `<span>${bmi}</span><br><span>overweight</span>`
   }
 }

})
```
## project 3 (digital clock)
```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date ()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```
## project 4 (guess the number)
```javascript
let num = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guess_slot = document.querySelector('.guesses')
const remain = document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p')

let prev = []
let numguess = 1
let playgame =true

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess =parseInt(input.value)
    validate(guess)
  })
}

function validate(guess){
  if(isNaN(guess))
  {
    alert('please enter a valid number')
  }
  else if (guess<1){
    alert('please enter a number more than 1')
  }
  else if (guess>100){
    alert('please enter a number less than 100')
  }
  else{
    prev.push(guess)
    if(numguess===11){
      clean_up_guess(guess)
      displaymessage('game over')
      endgame()
    }
    else{
      clean_up_guess(guess)
      check(guess)
    }
  }
}

function check(guess){
  if(guess === num){
    displaymessage('You guessed right')
  }
  else if(guess<num){
    displaymessage('Number is low')
  }
  else if(guess>num){
    displaymessage('Number is high')
  }
}

function clean_up_guess(guess){
  input.value = ''
  guess_slot.innerHTML += `${guess} `
  numguess++
  remain.innerHTML=`${11-numguess}`
}

function displaymessage(message){
loworhi.innerHTML = `<h1>${message}</h1>`;
}


function endgame(){
  input.value = ''
  input.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame">Start new Game</h2>`
  startover.appendChild(p)
  playgame=false
  newgame()
}

function newgame(){
  const newbutton=document.querySelector('#newgame')
  newbutton.addEventListener('click',function(e){
    num = parseInt(Math.random()*100+1)
    prev=[]
    numguess=1
    guess_slot.innerHTML = ''
    remain.innerHTML=`${11-numguess}`
    input.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true
  })
}

```