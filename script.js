const audio = document.getElementById('bg-music');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.querySelector('.btn').textContent = 'Play Music';
    } else {
        audio.play();
        isPlaying = true;
        document.querySelector('.btn').textContent = 'Pause Music';
    }
}

function adjustVolume(value) {
    audio.volume = value;
}

// Set default volume to 50%
audio.volume = 0.5;

// Animasi angka ala hacker (Matrix Rain Effect)
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0"; // Warna hijau neon
    ctx.font = "20px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Fungsi prank.mp3 + prank.png saat klik blackparade.png
const prankAudio = new Audio("prank.mp3");
prankAudio.volume = 1.0; // Volume maksimal

document.querySelector("h1").addEventListener("click", function () {
    prankAudio.play();
    document.body.innerHTML = '<img src="prank.png" style="width: 100vw; height: 100vh; object-fit: cover;">';
});

// Tambahan agar kompatibel dengan sentuhan di HP
document.querySelector("h1").addEventListener("touchstart", function () {
    prankAudio.play();
    document.body.innerHTML = '<img src="prank.png" style="width: 100vw; height: 100vh; object-fit: cover;">';
});
