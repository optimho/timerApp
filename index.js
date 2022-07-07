
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const durationInput = document.querySelector('#duration');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter.toString());

let duration = 0;

const timerInstance = new Timer (durationInput, startButton, pauseButton, stopButton, {
    onStart(totalDuration) {
        console.log("Timer Started")
        
        if (duration === 0) duration = totalDuration

    },
    onTick: function (timeRemaining) {
        console.log(perimeter * timeRemaining / duration - perimeter)
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter
        );

    },
    onComplete() {
        console.log("complete")
        duration = 0 
        circle.setAttribute('stroke-dashoffset', perimeter.toString())
    },

});
