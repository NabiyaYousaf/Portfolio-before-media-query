const heroSection=document.querySelector(".first-section");
//Responsive navbar  start

const mobil_nav=document.querySelector('.mobile-nav-btn');
const headerElement=document.querySelector('.header');


mobil_nav.addEventListener('click',()=>{
  headerElement.classList.toggle('active');
})



//Responsive navbar  end

const observer=new IntersectionObserver((enteries)=>{
  const ent=enteries[0];
  !ent.isIntersecting ?
  document.body.classList.add('sticky'):document.body.classList.remove('sticky');
},{root:null,threshold:0});
observer.observe(heroSection);

const p_btns=document.querySelector('.p-btns');
const p_btn=document.querySelectorAll('.p-btn');
const p_img=document.querySelectorAll('img-overlay');

p_btns.addEventListener('click',(e)=>{
    const p_btn_active=e.target;
    console.log(e.target);

    p_btn.forEach((curElement)=>curElement.classList.remove("p-btn-active"));
    p_btn_active.classList.add("p-btn-active");

    const btn_num=p_btn_active.dataset.btnNum;
    console.log(btn_num);

    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active)

    p_img.forEach((curElement)=>curElement.classList.add("p-image-not-active"));
    img_active.forEach((curElement)=>curElement.classList.remove("p-image-not-active"));

});

//****************Scroll to Top *******************/
  
  const scrollElement=document.createElement("div");
  scrollElement.classList.add("scroll-top-style");

  scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
  const footerSection=document.querySelector(".section-footer");
  footerSection.after(scrollElement);
  const scrollTop=()=>{
    heroSection.scrollIntoView({behavior:"smooth"});
  }
  scrollElement.addEventListener('click',scrollTop);

  //Buttons scrolling effect

  const aboutSec=document.querySelector('.about');
  const serviceSec=document.querySelector('.service-section');
  const porfolioSec=document.querySelector('.section-portfolio');
  const contactSec=document.querySelector('.contact-section');

  document.querySelector('.portfolio-link').addEventListener('click',()=>{
    porfolioSec.scrollIntoView({behavior:"smooth"});
  });
  document.querySelector('.contact-link').addEventListener('click',()=>{
    contactSec.scrollIntoView({behavior:"smooth"});
  });
  document.querySelector('.home-link').addEventListener('click',()=>{
    heroSection.scrollIntoView({behavior:"smooth"});
  });
  document.querySelector('.about-link').addEventListener('click',()=>{
    aboutSec.scrollIntoView({behavior:"smooth"});
  });
  document.querySelector('.services-link').addEventListener('click',()=>{
    serviceSec.scrollIntoView({behavior:"smooth"});
  });

 
  // animate number counter

  const counterNum = document.querySelectorAll(".counter-number");

  const speed = 200;

  counterNum.forEach((curElem) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      // console.log(targetNumber);
      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber / speed);
      // console.log(incrementNumber);

      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      }
    };

    updateNumber();
  });
//For testimonial

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
