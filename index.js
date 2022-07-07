
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter.toString());

let duration;

const timerInstance = new Timer (durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        console.log("Timer Started")
        duration = totalDuration
        console.log(totalDuration)
    },
    onTick(timeRemaining) {
        console.log(perimeter * timeRemaining / duration - perimeter)
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
            );
        
    },
    onComplete() {
        console.log("complete")
    },

});
