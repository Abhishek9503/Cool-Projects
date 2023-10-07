// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })

})


function videconAnimation(){
    var videocon =document.querySelector("#video-container")

var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter", function(){
   gsap.to(playbtn,{
    scale:1,
    opacity:1
   })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
       })
})


videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-60,
        top:dets.y-90
       })
})
}

videconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0,
        duration:0.5,
        stagger:0.2
    
    })


    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:0,
        duration:0.3,
        stagger:0.2
    
    })
}

loadingAnimation();



function cursorAnimation () {



// document.querySelector("#child1").addEventListener("mouseenter", function(){
//     gsap.to("#cursor",{
//     transform: 'translate(-50%, -50% )scale(1)'
        
//     })
// })


// document.querySelector("#child1").addEventListener("mouseleave", function(){
//     gsap.to("#cursor",{
//     transform: 'translate(-50%, -50%) scale(0)'
        
//     })
// })



    var a=document.querySelectorAll(".child")
    a.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to("#cursor",{
                transform: 'translate(-50%, -50% )scale(1)'
                   
                })
        })
    
    
        elem.addEventListener("mouseleave", function(){
            gsap.to("#cursor",{
                transform: 'translate(-50%, -50% )scale(0)'
                   
                })
        })
        
    })
}

cursorAnimation();






function locomotiveAnimations(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnimations();

function navbarAnimation(){
    gsap.to("#nav-part1 img", {
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:0.5
    
        }
    })
    
    
    
    gsap.to("#nav-part2 #links", {
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:1
    
        }
    })
}
navbarAnimation();