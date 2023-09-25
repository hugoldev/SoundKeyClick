function playSound(idSound) {
    document.querySelector(idSound).play();
}

const keyList = document.querySelectorAll('.tecla');

for(let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const sound = `#som_${instrument}`;

    key.onclick = function () {
        playSound(sound);
    } 

    key.onkeydown = function() {
        if(event.code === "Enter" || event.code === "Space") {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function() {
        key.classList.remove('ativa');
    }

}


// let counter = 0;

// Enquanto
// while(counter < keyList.length) {

//     const key = keyList[counter];
//     const instrument = key.classList[1];
//     const sound = `#som_${instrument}`;

//     key.onclick = function () {
//         playSound(sound);
//     }
//     counter += 1;
// } 