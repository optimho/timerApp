class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        if (callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }

    start =()=>{
        if (this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick()
        this.interval = setInterval(this.tick, 50)
    }

    tick =()=>{
        // console.log('tick')
        // const timeRemaining = this.timeRemaining
        // this.timeRemaining = timeRemaining-1;


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
