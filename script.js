const titre = document.querySelector(".titre");
const key = document.getElementById('key');
const inst = document.querySelector('.instructions');
const boxInstruction = document.querySelector('.instruction');
const close = document.querySelector('.close');


console.log(boxInstruction);


const ring = (key)=>{
    const audio = new Audio();
    audio.src = "./sound/" + key +".mp3";
    audio.play();
};

document.addEventListener("keydown", (event) => {
    key.textContent = event.key;

    if (/^[a-z]$/i.test(event.key)) {
        ring(event.key);
    } else {
        ring("other");
    }
});


inst.addEventListener('click',()=>{
    boxInstruction.style.visibility = "visible";
});

close.addEventListener('click', ()=>{
    boxInstruction.style.visibility = "hidden"
});

