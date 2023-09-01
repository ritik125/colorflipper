let a = 0;
    let b = 255;
    let flipper = document.getElementById("flipper");
    let colorName = document.getElementById("colorName");
    flipper.addEventListener('click',function f(){
        let x = `rgb(${Math.floor(b-(b*Math.random()))},${Math.floor(b-(b*Math.random()))},${Math.floor(b-(b*Math.random()))})`;
        document.body.style.backgroundColor = x;
        colorName.innerHTML = x;
        colorName.style.color = x;

    })
    let reset = document.getElementById("reset");
    let span = document.getElementById("colorName");
    reset.addEventListener('click',function x(){
        document.body.style.backgroundColor = "rgb(255,255,255)";
        span.innerHTML = "&nbsp White";
        span.style.color = "rgb(255,255,255)";
    });