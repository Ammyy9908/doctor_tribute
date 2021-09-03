



const sidebar = document.querySelector('.sidebar');

const doctors__wrapper = document.querySelector('.doctors__wrapper');

doctors.forEach((doctor)=>{
    sidebar.innerHTML+=`<span class="side_option">
    <a href="#${doctor.name}"><div class="doctor_avatar">
    <img src="${doctor.image}" alt="doctor__avatar"/>
    </div> ${doctor.name}</a>
</span>`

doctors__wrapper.innerHTML+=`<div class="doctor__section" id="${doctor.name}">
<h2 class="doctor__name">${doctor.name}</h2>
<img src="${doctor.image}" alt="doctor__thumb">

<p class="doctor__short__info">${doctor.short}</p>

<p class="doctor__long__info">
   ${doctor.long}
</p>
</div>`;
})





document.addEventListener('scroll',(e)=>{
    console.log("scrollY = >",window.scrollY);
    if(window.scrollY>300){
    //    document.querySelector('.header').classList.add('elevated');
        document.querySelector('.goto_top').classList.add('goto_top_enable');
    }
    else{
        // document.querySelector('.header').classList.remove('elevated');
        document.querySelector('.goto_top').classList.remove('goto_top_enable');
    }
})