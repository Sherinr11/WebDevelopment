let targetNumber = Math.floor(Math.random() * 100) + 1; 
let attempts = 0; 
function randomGenerate(event) {
    event.preventDefault();

    const msg = document.getElementById("msg");
    const a = document.getElementById("attempts");
    msg.style.color = 'white';


    const rno = parseInt(document.getElementById("rno").value, 10);

    if (isNaN(rno)) {
        msg.textContent = 'Enter a valid number!';
        return;
    }

    attempts++;
    a.textContent=` Attempts: ${attempts}`;


    if (rno < targetNumber) {
        msg.textContent = 'Try a higher number';
    } else if (rno > targetNumber) {
        msg.textContent = 'Try a smaller number';
    } else if (rno === targetNumber) {
        msg.style.color = 'white';
        msg.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        resetGame(); 
    }
}

function resetGame() {
    
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
}

document.getElementById('random').addEventListener('submit', randomGenerate);
