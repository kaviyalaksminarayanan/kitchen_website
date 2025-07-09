
gsap.registerPlugin(ScrollTrigger) 
gsap.from(".features", {
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });
  gsap.fromTo(".button",
    {
        scale:0.2,
        duration:2,
        opacity:0,
        ease:"power1.out"
    },
    {
        scale:1,
        delay:4,
        duration:2,
        opacity:1,
        ease:"power1.out"
    })
gsap.from("li",{
    y:-100,
    stagger:0.5,
    delay:1,
    duration:1,
    opacity:0,
    ease:"power1.out"
})
gsap.from(".left",{
    y:100,
    delay:1,
    duration:3,
    opacity:0,
    ease:"power1.out"
})
gsap.to('.box', {
	scrollTrigger: '.client', // start the animation when ".box" enters the viewport (once)
	x: 500
});

gsap.fromTo(".row",{
    y:250,
    duration:4,
    opacity:1,
    stagger:0.2,
    delay:0.9,
},{y:0})
const clients=document.querySelectorAll(".client");
clients.addEventListener("mouseenter",()=>{
    gsap.to(clients,
    {
        scale:1.1
    })
})
clients.addEventListener("mouseleave",()=>{
    gsap.to(clients,
    {
        scale:1
    })
})

