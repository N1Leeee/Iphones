const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
})

const anchors = document.querySelectorAll('a[href*="#"]')
let isScrolling = false;

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        
        if (isScrolling) return;

        isScrolling = true;
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    })
}