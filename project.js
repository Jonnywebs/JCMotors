const fall = document.querySelector("ul");
let j = 0;
setInterval( () => {
    const fallen = fall.children[j]
      fallen.classList.add('falls')
      j++
},150)



const slider = document.querySelector(".sliders");
let i = 100;

setInterval(() => {
  slider.style.marginLeft= `-${i}%`;
  if(i < 500){
    i += 100;
  }
  else{
    slider.style.marginLeft= "0";
    i = 100;
  }
}, 10000)

const welcome = document.querySelector(".welcome");
const learn = document.querySelector(".learn");
const discount = document.querySelector(".discount");
const floats = document.querySelector("floats");

  function addFloatings() {

  if(window.scrollY > 0){
      welcome.style.display = "none";
      discount.style.display = "none";
      learn.style.display = "none";
      }
      else{
        welcome.style.display = "block";
        discount.style.display = "block";
        learn.style.display = "block";
      }
    }
  window.addEventListener('load', addFloatings);
  window.addEventListener('scroll', addFloatings);

  setTimeout( () => {
    welcome.classList.add("welcome-display");
  }, 1000)
  setTimeout( () => {
    welcome.classList.remove("welcome-display");
  }, 8000)
  setTimeout( () => {
    discount.classList.add("discount-display");
  }, 1500)
  setTimeout( () => {
    discount.classList.remove("discount-display");
  }, 8500)
  setTimeout( () => {
    learn.classList.add("learn-display");
  }, 2000)
  setTimeout( () => {
    learn.classList.remove("learn-display");
  }, 9000)
  setInterval( () =>{ 
      setTimeout( () => {
        welcome.classList.add("welcome-display");
      }, 2000)
      setTimeout( () => {
        welcome.classList.remove("welcome-display");
      }, 8000)
      setTimeout( () => {
        discount.classList.add("discount-display");
      }, 2500)
      setTimeout( () => {
        discount.classList.remove("discount-display");
      }, 8500)
      setTimeout( () => {
        learn.classList.add("learn-display")
      }, 3000)
      setTimeout( () => {
        learn.classList.remove("learn-display")
      }, 9000)
    },10000)

    // =============================== ICONS AND DROPDOWN =============================

    const nav = document.querySelector("nav > ul");
    const dropDownicon = document.querySelector(".drop-down-icon");
    dropDownicon.addEventListener('click', () => {
      nav.classList.toggle("active-nav");
      dropDownicon.children[0].classList.toggle("first-icon-line");
      dropDownicon.children[1].classList.toggle("second-icon-line");
      dropDownicon.children[2].classList.toggle("third-icon-line");
      let k = 0;
setInterval( () => {
    const fallen = fall.children[k]
      fallen.classList.toggle('fallen')
      k++
},150)
    });
    const cards = document.querySelectorAll(".card");
    const services = document.querySelectorAll(".service");
    const advert = document.querySelector(".services-advert");
    function checkScroll() {
      for(const card of cards){
       const rect = card.getBoundingClientRect();
       const isinViewport = rect.top < window.innerHeight && rect.bottom >= 0;
       if(isinViewport){
        card.classList.add('card-display')
       }
      }
      for(const service of services){
        const serve = service.getBoundingClientRect();
       const isinViewports = serve.top < window.innerHeight && serve.bottom >= 0;
       if(isinViewports){
        service.classList.add('service-display')
       }
      }
      const advertise = advert.getBoundingClientRect();
      const startTyping = advertise.top < window.innerHeight && advertise.bottom >= 0;
      if(startTyping){
        advert.classList.add('advert-display')
      }
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    
    const servicesAdvert = document.querySelector(".services-advert")
    setInterval( () => {
      servicesAdvert.classList.toggle("blinking-cursor")
    }, 500)

    // ======================== TESTIMONIES ===============
    
    const testimonies = document.querySelectorAll(".testimony");
    for(const testimony of testimonies){
      testimony.addEventListener('click', () => {
        testimony.classList.toggle("testimony-display");
      })
    }
    
    