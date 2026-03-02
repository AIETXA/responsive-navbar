const navHamb = document.getElementById('navHamb');
navHamb.addEventListener('click', (e) => {
    navHamb.parentElement.classList.toggle('active');
})