let darkmodeicon =document.getElementById('darkMode-icon');
let logo1 =document.querySelector('.logo1');
let logo2 =document.querySelector('.logo2');

darkmodeicon.onclick = () => {
    if(darkmodeicon.innerHTML=='dark_mode'){
        darkmodeicon.innerHTML='light_mode';
        logo1.style.display='none';
        logo2.style.display='block';
    }
    else{
        darkmodeicon.innerHTML='dark_mode';
        logo2.style.display='none';
        logo1.style.display='block';
    }
    document.body.classList.toggle('darkmode');
}
