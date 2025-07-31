const setTime = 4;

function timer(){
  let seconds = setTime * 60;
  console.log(seconds)
    const timerDiv = document.getElementById('timer');
    
    
    timeInt = setInterval( () =>{
        let mins = seconds / 60;
        
        
        let remSec = Math.floor(seconds % 60);
        let remMins = Math.floor(mins % 60);
        
        if(remSec < 10){
          remSec = `0${remSec}`
        }
        
        if(remMins < 2){
          timerDiv.classList.add('danger');
        } else if (remMins < 3){
          timerDiv.classList.add('warning')
        }
        
        if(remMins < 10){
          remMins = `0${remMins}`
        }
        
        timerDiv.innerHTML = `${remMins} : ${remSec}`
        seconds--
        console.log(timerDiv)
    }, 1000)
    
    setTimeout(() =>{
      clearInterval(timeInt)
      setInterval(() =>{
        timerDiv.innerHTML = 'Timeout'
      },500);
      setInterval(() =>{
        timerDiv.innerHTML = ''
      },1000)
    }, seconds * 1000);
}

window.addEventListener('load', () =>{
  timer();
});