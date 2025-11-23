let startbtn = document.querySelector('#btn');

function startBtn() {
    startbtn.remove();

    function makeBubble(){
        let count = '';
        for (let i = 1; i < 134; i++) {
            let num = Math.floor(Math.random() * 10);
            count += `<div class="ball">${num}</div>`;
        }
        document.querySelector('#pbtm').innerHTML = count;
    }

    function timeStamp(){
        let timer = 60;
        let time = setInterval(function(){
            if (timer > 0) {
                timer--;
                document.querySelector('#timeStamp').textContent = timer;
            } else {
                clearInterval(time);
                gameOver();
            }
        }, 1000);
    }

    let hitrn = 0;
    function hitNum(){
        hitrn = Math.floor(Math.random() * 10);
        document.querySelector('#hitval').textContent = hitrn;
    }

    let score = 0;
    function increseScore(){
        score += 10;
        document.querySelector('#inScore').textContent = score;
    }

    function gameOver(){
        let gameOver = document.querySelector('#pbtm');

        // CLEAR + CENTER MODE
        gameOver.innerHTML = "";
        gameOver.classList.add('centerBox');

        // RESET BUTTON
        const btn = document.createElement('button');
        btn.classList.add('reset');
        btn.textContent = "One More Try?..";
        gameOver.appendChild(btn);

        btn.addEventListener('click', function(){
            // REMOVE CENTER
            gameOver.classList.remove('centerBox');
            score = 0;
            document.querySelector('#inScore').textContent = score;

            hitNum();
            timeStamp();
            makeBubble();
        });
    }

    // BUBBLE CLICKING
    document.querySelector('#pbtm')
    .addEventListener('click', function(dets){
        let check = Number(dets.target.textContent);
        if (check === hitrn) {
            increseScore();
            makeBubble();
            hitNum();
        }
    });

    hitNum();
    timeStamp();
    makeBubble();
}

startbtn.addEventListener('click', startBtn);
