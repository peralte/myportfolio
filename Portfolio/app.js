const allBoxes= document.querySelector(".boxes");
const button=document.querySelector(".button-ligne")
const boxes=document.querySelector(".boxes")
const menu=document.querySelector(".navigation")
const aboute= document.querySelector(".about")
const link = document.querySelectorAll("#slt")
const nave = document.querySelectorAll("#nav")

allBoxes.addEventListener("click", () => {
    allBoxes.classList.toggle("active")


menu.classList.toggle("inject")

})


    link.forEach((slt) => {
   slt.addEventListener("click", (e) =>{
    menu.classList.toggle("inject")
    allBoxes.classList.toggle("active")
   })
});
 
alert("! Ce site web est en cours de développement il peut presenter des défauts d'affichage en fonction de votre smartphone ou de votre navigateur, veuillez l'essayer sur Chrome si c'est possible. Et laisser un commentaire en bas de la page pour me faire part de tes critiques ou suggestion, c'est très important merci !")


// ---------------------------------part1-------------------------------------

// $(function(){
//   var $ppc = $('.progress-pie-chart3'),
//     percent = parseInt($ppc.data('percent')),
//     deg = 360*percent/100;
//   if (percent > 50) {
//     $ppc.addClass('gt-50');
//   }
//   $('.ppc-progress-fill3').css('transform','rotate('+ deg +'deg)');
//   $('.ppc-percents span3° ').html(percent+'%');
// });

// ----------------------------------part2-------------------------------------
const imagee=document.querySelector(".about")
const appr2=document.querySelector(".appr2")
const appr5=document.querySelector(".appr3")
const appr6=document.querySelector(".unps")
const appr7=document.querySelector(".outer-Container")
const appr8=document.querySelectorAll(".progress-bar")
const appr10=document.querySelector(".appr10")
const appr15=document.querySelector(".appr11")
const appr12=document.querySelector(".appr12")
const appr13=document.querySelector(".appr13")
const appr11=document.querySelector(".second-text")
const bounce=document.querySelector(".zoo")
bounce.classList.add('animate__animated', 'animate__bounceOutLeft')


window.addEventListener("scroll", (e) =>{
 

  if(scrollY > 1945){
    appr12.style.opacity=1
    appr12.style.transform="translateY(0px)"
    appr12.classList.add('animate__animated', 'animate__fadeInUp');
   }
 
  if(scrollY > 2235){
    appr13.style.opacity=1
    appr13.style.transform="translateY(0px)"
    appr13.classList.add('animate__animated', 'animate__fadeInUp');
   }



   if (scrollY > 110){
    imagee.style.opacity=1
    imagee.style.transform="translateX(0)"
   }

   if(scrollY > 110){
    appr2.style.opacity=1
    appr2.style.transform="translateY(0px)"
     appr2.classList.add('animate__animated', 'animate__fadeInLeft');
   }


   if(scrollY > 500){
    appr5.style.opacity=1
    appr5.classList.add('animate__animated', 'animate__fadeInUp');
   }
 
   if(scrollY > 600){
    appr6.style.opacity=1
   }
   if(scrollY > 1200){
    appr10.style.opacity=1
    // appr10.style.transform="translateY(0px)"
    appr10.classList.add('animate__animated', 'animate__fadeInUp');
   }
  
   if(scrollY > 1410){
    
        appr8.forEach(progressbar => {
         progressbar.style.display="flex"
      });
    
   }
    // console.log(window.scrollY)

   if(scrollY > 1454){
    appr11.style.opacity=1
    appr11.style.transform="translateY(0px)"
    appr11.classList.add('animate__animated', 'animate__fadeInUp');
   } 
})



// <!----------------------code pen part--------------------->

const delay = 2000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});


var string = "Hello I'm Laith Haleem Form Ghammas Love Developing Websites";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();



function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

