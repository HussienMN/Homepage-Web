import {LitElement ,html} from 'lit-element';

const timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
      
function getShowTime(){
    updatedTime = new Date().getTime();
    if (savedTime){
      difference = (updatedTime - startTime) + savedTime;
    } else {
      difference =  updatedTime - startTime;
    }
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((difference % (1000 * 60)) / 100);hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
    timerDisplay = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
  }

class stoppUhr extends LitElement{

    render(){
        return html `
        <style></style>

        <div id="timerContainer">
        <div class="timer">00:00:00</div>
        <span></span>
        <button class='button'  @click="${this.startTimer}">Start</button>
          <i class="fas fa-play"></i>
        <button class='button' @click="${this.pauseTimer}" >Pause</button>
         <i class="fas fa-pause"></i>
        <button class='button' @click="${this.resetTimer}">Reset</button> 
      </div>
        <style>
            .button{
                background-color: #4CAF50;
                color: black;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
            }
        </style>
        `;
    }
    handleClick() {
        alert('hi');
      }
 
      startTimer(){
        if(!running){
         startTime = new Date().getTime();
            tInterval = setInterval(getShowTime, 1);
            paused = 0;
            running = 1;
    }
    }
     pauseTimer(){
        if (!difference){
        } else if (!paused) {
          clearInterval(tInterval);
          savedTime = difference;
          paused = 1;
          running = 0;
        } else {
        }
      }
      resetTimer(){
        clearInterval(tInterval);
        savedTime = 0;
        difference = 0;
        paused = 0;
        running = 0;
        timerDisplay.innerHTML = '';
      }
}


customElements.define('st-uhr', stoppUhr);

