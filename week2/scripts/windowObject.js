
const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');
const asideElement = document.querySelector("aside");

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
    if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
        mainnav.classList.remove('responsive');
    }
    asideElement.innerHTML = `InnerWidth = ${window.innerWidth} <br> InnerHeight = ${window.innerHeight}`;
});

