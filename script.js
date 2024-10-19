// counter-js

let numb = document.getElementById('number')


let number = 0

const dec=() => {
    if(number < 1){
        alert('Limit only 0')
        number=0
    }
    else {
        number--
    }
    numb.innerHTML = number
}

const inc=() => {
    number++
    numb.innerText = number
}

numb.innerText = number
