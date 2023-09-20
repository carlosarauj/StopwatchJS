let sec = 0
let min = 0
let hour = 0
let interval

function secondZero(second){
    if(second < 10){
        return '0'+second
    } else {
        return second
    }
}

function cont(){
    interval = setInterval(start, 1000)
}

function start(){
    sec++
    document.querySelector('#sec').innerText = secondZero(sec)
    if(sec == 60){
        min ++
        document.querySelector('#min').innerText = secondZero(min)
        sec = 0
    }

    if(min === 60){
        hour++
        document.querySelector('#hour').innerText = secondZero(hour)
        min = 0
    }
}


function inic(){
    cont()
}

function pause(){
   clearInterval(interval)
}

function reload(){
    clearInterval(interval)
    sec = 0
    min = 0
    hour = 0
    document.querySelector('#hour').innerText = '00'
    document.querySelector('#min').innerText = '00'
    document.querySelector('#sec').innerText = '00'
}