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

function validateName(name){
    const re = /^[А-ЯЁ][а-яё]{3,14}$/;
    return re.test(name);
}

function validateTelephone(telephone){
    const re = /^(\+?375(17|29|33|44)[0-9]{7})$/;
    return re.test(telephone);
}

let form = document.querySelector('.contacts-form'),
inputName = document.querySelector('.js-input-name'),
inputTelephone = document.querySelector('.js-input-tel');

form.onsubmit = function(){
    let nameVal = inputName.value,
    telephoneVal = inputTelephone.value;
    let isValid = true;

    if(validateName(nameVal) || !nameVal === ''){
        inputName.classList.remove('error');
    }
    else{
        inputName.classList.add('error');
        isValid = false;;
    }

    if(validateTelephone(telephoneVal) || !telephoneVal === ''){
        inputTelephone.classList.remove('error');
    }
    else{
        inputTelephone.classList.add('error');
        isValid = false;
    }

    if(isValid){
        alert('Ваша заявка принята! Менеджер скоро с Вами свяжется.');
    }
    else{
        return false;
    }
}