const section = document.querySelector('.section');
const scrollBar = document.querySelector('.scrollBar');
animateBar = ()=>{
    let width = (-section.getBoundingClientRect().top/(section.getBoundingClientRect().height-document.documentElement.clientHeight))*100;
    if (width < 0) {
        width=0;
    }
    scrollBar.style.width = width+'%';
}
window.addEventListener('scroll',this.animateBar)