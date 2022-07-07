class Timer{
    constructor(durationInput, startButton, pauseButton, stopButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.stopButton = stopButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.stopButton.addEventListener('click', this.stop);
        this.originalTimerVal =  this.timeRemaining;
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }
    
    
    stop =()=>{
        clearInterval(this.interval);
        this.onComplete()
        this.timeRemaining = this.originalTimerVal;
        
        console.log('Stopping')
    }

    start =()=>{
        if (this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick()
        this.interval = setInterval(this.tick, 50)
    }

    tick =()=>{

        
        if (this.timeRemaining<=0){
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else
        {
            if(this.onTick) this.onTick(this.timeRemaining);
            this.timeRemaining = this.timeRemaining -0.05;
        }
    }
    pause = () =>{
        console.log('pause called')
        clearInterval(this.interval);
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
}
