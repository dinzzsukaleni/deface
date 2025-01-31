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

// Fungsi prank.mp3 + prank.png saat klik teks "HACKED BY DINZZ" di index.html
const prankAudio = new Audio("prank.mp3");
prankAudio.volume = 1.0; // Volume maksimal
prankAudio.loop = true; // Mengatur audio agar diulang-ulang

function playPrank() {
    prankAudio.play().then(() => {
        document.body.innerHTML = '<img id="prankImage" src="prank.jpg" style="width: 100vw; height: 100vh; object-fit: cover;">';
        // Masukkan halaman ke fullscreen
        goFullscreen();
    }).catch(error => {
        console.error("Error playing prank audio:", error);
    });
}

// Fungsi untuk mengaktifkan fullscreen
function goFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }

    // Tambahkan event listener untuk keluar dari fullscreen
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);
}

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        const prankImage = document.getElementById("prankImage");
        if (prankImage) {
            prankImage.requestPictureInPicture().catch(error => {
                console.error("Error entering Picture-in-Picture mode:", error);
            });
        }
    }
}

document.querySelector("h1").addEventListener("click", playPrank);

// Tambahan agar kompatibel dengan sentuhan di HP
document.querySelector("h1").addEventListener("touchstart", playPrank);
