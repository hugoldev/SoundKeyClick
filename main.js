function playSound(idSound) {
    document.querySelector(idSound).play();
}

const keyList = document.querySelectorAll('.tecla');

let counter = 0;

// Enquanto
while(counter < keyList.length) {

    const key = keyList[counter];
    const instrument = key.classList[1];
    const sound = `#som_${instrument}`;

    key.onclick = function () {
        playSound(sound);
    }
    counter += 1;
} 