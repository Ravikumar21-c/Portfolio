document.addEventListener('mousemove', (e) => {
    const hower = document.querySelector('.hower');
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    hower.style.transform = `rotateY(${x * 25}deg) rotateX(${-y * 25}deg)`;
});




document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".sticky-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    hireButton.addEventListener("click", function () {
        alert("Thank you for your interest! I'll get back to you soon.");
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".sticky-header");
    const hireButton = document.querySelector(".hire-btn");
    const animatedText = document.getElementById("animated-text");

    // Sticky Header Scroll Effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Hire Me Button Click Event
    hireButton.addEventListener("click", function () {
        alert("Thank you for your interest! I'll get back to you soon.");
    });


});



document.querySelectorAll('.contender').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.animation = 'fadeIn 0.5s ease-in-out';
    });
});

//about
let cards = document.querySelectorAll(".card");

let stackArea = document.querySelector(".stack-area");

function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.style.transform = ` rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}
rotateCards();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.5;

    let topVal = stackArea.getBoundingClientRect().top;

    let index = -1 * (topVal / distance + 1);

    index = Math.floor(index);

    for (i = 0; i < cards.length; i++) {
        if (i <= index) {
            cards[i].classList.add("away");
        } else {
            cards[i].classList.remove("away");
        }
    }
    rotateCards();
});
//projects
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll('.exp');
    projects.forEach((project, index) => {
        project.style.opacity = 0;
        project.style.transform = "translateY(20px)";
        setTimeout(() => {
            project.style.transition = "all 0.6s ease";
            project.style.opacity = 1;
            project.style.transform = "translateY(0)";
        }, index * 200);
    });
});
//ifram fullscreen
function openFullscreen(iframeId) {
    const iframe = document.getElementById(iframeId);
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}
//button
function buttonClicked() {
    alert("You clicked the 3D Glow Button!");
}

//musicplay
const songs = [
    {
        title: "짝사랑 힘들때인디음",
        artist: "(힘들때.인디음악) by Melody",
        src: "https://res.cloudinary.com/dfpoitmva/video/upload/v1753531767/%ED%8F%89%EB%B2%94%ED%95%98%EA%B2%8C_%EB%93%A4%EC%96%B4%EC%A4%98._gsi5ja.mp3",
        cover: "https://lnk.ink/VRF7x"
    },
    {
        title: "Sweater Weather",
        artist: "by The Neighbourhood",
        src: "https://res.cloudinary.com/dfpoitmva/video/upload/v1753532663/The_Neighbourhood_-_Sweater_Weather_Official_Video_n7rp8i.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Btv4BlwdaI7eNk5OmfgmFlT1B1_y8wPPEA&s"

    },

    {
        title: "_Here_With_Me_",
        artist: "d4vd_",
        src: "https://res.cloudinary.com/dfpoitmva/video/upload/v1753531872/d4vd_-_Here_With_Me_Official_Music_Video_u9eemm.mp3",
        cover: "https://i.scdn.co/image/ab67616d00001e0264fa1bda999f4fbd2b7c4bb7"
    },
    {
        title: "Snow Flower",
        artist: "(feat. Peakboy) by V",
        src: "https://res.cloudinary.com/dfpoitmva/video/upload/v1753531670/Snow_Flower_feat._Peakboy_by_V_ogwonp.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273df865c096835a346702f555a"
    },
    {
        title: "There Is a Light",
        artist: "The Smiths",
        src: "https://res.cloudinary.com/dfpoitmva/video/upload/v1753531657/There_Is_a_Light_That_Never_Goes_Out_2011_Remaster_vopsci.mp3",
        cover: "https://i.scdn.co/image/ab67616d00001e028abb33c7671ca773e148fef7"
    },
    {
        title: "Paaro",
        artist: "Aditya Rikhari",
        src: "https://res.cloudinary.com/dfpoitmva/video/upload/v1753531695/Aditya_Rikhari_-_Paaro_Official_Video_qrg00x.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b27390c6e25ed80fd8a70c71e921"
    }
];

let currentIndex = 0;
const audio = document.getElementById("audio-player");
const seekbar = document.getElementById("seekbar");
const title = document.getElementById("song-title");
const artist = document.getElementById("artist-name");
const cover = document.getElementById("album-cover");

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
}

function seekAudio(value) {
    if (!isNaN(audio.duration)) {
        audio.currentTime = (value / 100) * audio.duration;
    }
}

audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        seekbar.value = (audio.currentTime / audio.duration) * 100;
    }
});

audio.addEventListener("ended", nextSong); // Auto play next

// Load the first song initially
loadSong(currentIndex);
