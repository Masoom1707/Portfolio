const openMenu = document.getElementById("profile-opening");
const Activity = document.getElementById("sidebarActivity");
const moreLink = document.getElementById("showLink");
function toggleMenu() {
  openMenu.classList.toggle("open-menu");
}
function showActivity() {
  Activity.classList.toggle("openActivity");
  if (Activity.classList.contains("openActivity")) {
    moreLink.innerHTML = "Show less <b>-</b>";
  } else {
    moreLink.innerHTML = "Show more <b>+</b>";
  }
}




function pageTwoAnimation(){
const eLement = document.querySelectorAll(".data");

eLement.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){

       gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
       })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
           })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-30,
            y:dets.y - elem.getBoundingClientRect().y-70
           })
    })
})
}

pageTwoAnimation()


function loader(){
  var tl = gsap.timeline()

tl.from(".loader h3",{
  x:100,
  opacity:0,
  duration:0.7,
  stagger:0.2
  
})
tl.to(".loader h3",{
  opacity:0,
  x:-300,
  stagger:0.1,
  duration:0.7,
})
tl.to(".loader",{
  opacity:0,
  duration:0.5,
  display:"none"
})
}


loader();
