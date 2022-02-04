function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (audio == false){return};

    // Allow spammable audio
    audio.currentTime = 0;

    audio.play();

    key.classList.add('playing');

};

function fixStuck(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(key.classList.contains('playing')){
        setTimeout(function(){
            key.classList.remove('playing');
            console.log('Removed stuck class.')
        }, 3000);
    };
};



window.addEventListener('keydown',playSound);


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',fixStuck);