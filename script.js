
//!logoyu kare seklinde hareket ettirme

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".navbar-brand img");

  // Hareket bir döngüde gerçekleşecek
  function moveLogoInSquare() {
    // Yukarı doğru hareket (başlangıç konumu)
    logo.style.top = "0px";
    logo.style.left = "0px";

    // Sağa doğru hareket
    setTimeout(() => {
      logo.style.top = "0px";
      logo.style.left = "100px";
    }, 1000);

    // Aşağı doğru hareket
    setTimeout(() => {
      logo.style.top = "100px";
      logo.style.left = "100px";
    }, 2000);

    // Sola doğru hareket
    setTimeout(() => {
      logo.style.top = "100px";
      logo.style.left = "0px";
    }, 3000);

    // Yukarı doğru hareket - başlangıç noktasına dön
    setTimeout(() => {
      logo.style.top = "0px";
      logo.style.left = "0px";
    }, 4000);
  }

  // Animasyonu başlat
  moveLogoInSquare();
});

//!Navbar Sticky rengi  degistirme

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
//!Navbar in icinde bizi izeyin kisminda acilip kapanan video kismi

document
  .getElementById("openVideo")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const videoContainer = document.getElementById("videoContainer");
    const myVideo = document.getElementById("myVideo");

    videoContainer.classList.remove("hidden");
    myVideo.play();

    setTimeout(() => {
      myVideo.pause();
      videoContainer.classList.add("hidden");
    }, 3000);
  });

//!Fare butonun uzerine geldiginde rengini degistirir

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mousemove", function (e) {
    const { offsetX, offsetY } = e;
    const { offsetWidth: width, offsetHeight: height } = this;

    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    const gradient = `radial-gradient(circle at ${xPercent}% ${yPercent}%, 
    #5b9bd5, #e3efff)`;

    this.style.background = gradient;
  });

  button.addEventListener("mouseleave", function () {
    this.style.background = "transparent";
  });
});

