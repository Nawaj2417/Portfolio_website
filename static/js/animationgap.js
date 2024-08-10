window.addEventListener("DOMContentLoaded",()=>{

  let gsaptimeline = gsap.timeline()
      gsaptimeline.from("header ",{
      y:-100,
      duration:0.5,
      
      
      })
      
      
      gsap.from(".right",{
          scale:0,
          duration:0.5
      })
      gsaptimeline.from(".left h2",{
      y:-200,
      duration:0.5,
      })
      gsaptimeline.from(".boxesss",{
          opacity:0,
            y:200,
          duration:0.5,  
      })
      

let responsivegsap = gsap.matchMedia();

responsivegsap.add("(max-width:1000px)",()=>{})


  
    if(window.innerWidth >= 1500){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"600px",
      right:"780px",
      // duration:1,
      })
      
      let startmove2 = gsap.timeline({
        scrollTrigger:{
          trigger:".education-section",
          start:"20% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove2.to(".image-box img",{
      top:"1300px",
      right:"550px",
      width:"250px"
      })
      
      
      let startmove3 = gsap.timeline({
        scrollTrigger:{
          trigger:"#skillsection",
          start:"10% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove3.to(".image-box img",{
      top:"2230px",
      right:"480px",
      width:"350px"
      })
      
      
      
      let startmove4 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:first-child",
          start:"13% 80%",
          end:"25% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove4.to(".image-box img",{
      top:"3000px",
      right:"720px",
      width:"200px"
      })
      
      let startmove5 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(2)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove5.to(".image-box img",{
      top:"3350px",
      right:"420px",
      width:"200px"
      })
      
      let startmove6 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(3)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove6.to(".image-box img",{
      top:"3650px",
      right:"720px",
      width:"200px"
      })
      
      
      let startmove7 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(4)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove7.to(".image-box img",{
      top:"3950px",
      right:"420px",
      
      width:"200px"
      })
      
      let startmove8 = gsap.timeline({
        scrollTrigger:{
          trigger:"#contactsection",
          start:"0% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove8.to(".image-box img",{
      top:"6850px",
      right:"150px",
      
      width:"400px"
      })
      
      
    }
   else if(window.innerWidth >= 1400 && window.innerWidth < 1500 ){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"700px",
      right:"680px",
      // duration:1,
      })
      
      let startmove2 = gsap.timeline({
        scrollTrigger:{
          trigger:".education-section",
          start:"20% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove2.to(".image-box img",{
      top:"1350px",
      right:"480px",
      width:"250px"
      })
      
      
      let startmove3 = gsap.timeline({
        scrollTrigger:{
          trigger:"#skillsection",
          start:"10% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove3.to(".image-box img",{
      top:"2350px",
      right:"430px",
      width:"350px"
      })
      
      
      
      let startmove4 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:first-child",
          start:"13% 80%",
          end:"25% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove4.to(".image-box img",{
      top:"3050px",
      right:"670px",
      width:"200px"
      })
      
      let startmove5 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(2)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove5.to(".image-box img",{
      top:"3370px",
      right:"370px",
      width:"200px"
      })
      
      let startmove6 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(3)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove6.to(".image-box img",{
      top:"3670px",
      right:"670px",
      width:"200px"
      })
      
      
      let startmove7 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(4)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove7.to(".image-box img",{
      top:"3950px",
      right:"370px",
      
      width:"200px"
      })
      
      let startmove8 = gsap.timeline({
        scrollTrigger:{
          trigger:"#contactsection",
          start:"0% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove8.to(".image-box img",{
      top:"6880px",
      right:"150px",
      
      width:"400px"
      })
      
      
    }
   else if(window.innerWidth >= 1300 && window.innerWidth < 1400){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"650px",
      right:"550px",
      // duration:1,
      })
      
      let startmove2 = gsap.timeline({
        scrollTrigger:{
          trigger:".education-section",
          start:"20% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove2.to(".image-box img",{
      top:"1600px",
      right:"430px",
      width:"250px"
      })
      
      
      let startmove3 = gsap.timeline({
        scrollTrigger:{
          trigger:"#skillsection",
          start:"10% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove3.to(".image-box img",{
      top:"2390px",
      right:"350px",
      width:"350px"
      })
      
      
      
      let startmove4 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:first-child",
          start:"13% 80%",
          end:"25% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove4.to(".image-box img",{
      top:"3000px",
      right:"600px",
      width:"200px"
      })
      
      let startmove5 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(2)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove5.to(".image-box img",{
      top:"3330px",
      right:"320px",
      width:"200px"
      })
      
      let startmove6 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(3)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove6.to(".image-box img",{
      top:"3630px",
      right:"600px",
      width:"200px"
      })
      
      
      let startmove7 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(4)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove7.to(".image-box img",{
      top:"3930px",
      right:"310px",
      
      width:"200px"
      })
      
      let startmove8 = gsap.timeline({
        scrollTrigger:{
          trigger:"#contactsection",
          start:"0% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove8.to(".image-box img",{
      top:"6680px",
      right:"80px",
      
      width:"400px"
      })
      
      
    }
    else if(window.innerWidth >= 1200 && window.innerWidth < 1300){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"800px",
      right:"500px",
      // duration:1,
      })
      
      let startmove2 = gsap.timeline({
        scrollTrigger:{
          trigger:".education-section",
          start:"20% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove2.to(".image-box img",{
      top:"1470px",
      right:"400px",
      width:"250px"
      })
      
      
      let startmove3 = gsap.timeline({
        scrollTrigger:{
          trigger:"#skillsection",
          start:"10% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove3.to(".image-box img",{
      top:"2500px",
      right:"320px",
      width:"350px"
      })
      
      
      
      let startmove4 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:first-child",
          start:"13% 80%",
          end:"25% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove4.to(".image-box img",{
      top:"3200px",
      right:"600px",
      width:"200px"
      })
      
      let startmove5 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(2)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove5.to(".image-box img",{
      top:"3490px",
      right:"260px",
      width:"200px"
      })
      
      let startmove6 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(3)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove6.to(".image-box img",{
      top:"3800px",
      right:"600px",
      width:"200px"
      })
      
      
      let startmove7 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(4)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove7.to(".image-box img",{
      top:"4090px",
      right:"260px",
      
      width:"200px"
      })
      
      let startmove8 = gsap.timeline({
        scrollTrigger:{
          trigger:"#contactsection",
          start:"0% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove8.to(".image-box img",{
      top:"7050px",
      right:"50px",
      
      width:"400px"
      })
      
      
    }
    else if(window.innerWidth >= 1100 && window.innerWidth < 1200){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"850px",
      right:"450px",
      // duration:1,
      })
      
      let startmove2 = gsap.timeline({
        scrollTrigger:{
          trigger:".education-section",
          start:"20% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove2.to(".image-box img",{
      top:"1950px",
      right:"375px",
      width:"250px"
      })
      
      
      let startmove3 = gsap.timeline({
        scrollTrigger:{
          trigger:"#skillsection",
          start:"10% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove3.to(".image-box img",{
      top:"2750px",
      right:"100px",
      width:"350px"
      })
      let startmovex = gsap.timeline({
        scrollTrigger:{
          trigger:".right-sk",
          start:"10% 55%",
          end:"20% 55%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmovex.to(".image-box img",{
      top:"3300px",
      right:"650px",
      width:"350px"
      })
      
      
      
      let startmove4 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:first-child",
          start:"13% 80%",
          end:"25% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove4.to(".image-box img",{
      top:"4000px",
      right:"550px",
      width:"200px"
      })
      
      let startmove5 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(2)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove5.to(".image-box img",{
        top:"4300px",
      right:"260px",
      width:"200px"
      })
      
      let startmove6 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(3)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove6.to(".image-box img",{
        top:"4600px",
      right:"550px",
      width:"200px"
      })
      
      
      let startmove7 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(4)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove7.to(".image-box img",{
        top:"4900px",
      right:"260px",
      
      width:"200px"
      })
      
      let startmove8 = gsap.timeline({
        scrollTrigger:{
          trigger:"#contactsection",
          start:"0% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove8.to(".image-box img",{
      top:"7780px",
      right:"0px",
      
      width:"400px"
      })
      
      
    }
    else if(window.innerWidth >= 1050 && window.innerWidth < 1100){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"950px",
      right:"400px",
      // duration:1,
      })
      
      let startmove2 = gsap.timeline({
        scrollTrigger:{
          trigger:".education-section",
          start:"20% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove2.to(".image-box img",{
      top:"2050px",
      right:"350px",
      width:"250px"
      })
      
      
      let startmove3 = gsap.timeline({
        scrollTrigger:{
          trigger:"#skillsection",
          start:"10% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove3.to(".image-box img",{
      top:"2800px",
      right:"100px",
      width:"350px"
      })
      let startmovex = gsap.timeline({
        scrollTrigger:{
          trigger:".right-sk",
          start:"10% 55%",
          end:"20% 55%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmovex.to(".image-box img",{
      top:"3350px",
      right:"650px",
      width:"350px"
      })
      
      
      
      let startmove4 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:first-child",
          start:"13% 80%",
          end:"25% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove4.to(".image-box img",{
      top:"4000px",
      right:"550px",
      width:"200px"
      })
      
      let startmove5 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(2)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove5.to(".image-box img",{
        top:"4350px",
      right:"260px",
      width:"200px"
      })
      
      let startmove6 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(3)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove6.to(".image-box img",{
        top:"4650px",
      right:"550px",
      width:"200px"
      })
      
      
      let startmove7 = gsap.timeline({
        scrollTrigger:{
          trigger:".exp-box:nth-child(4)",
          start:"50% 75%",
          end:"60% 75%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove7.to(".image-box img",{
        top:"4950px",
      right:"260px",
      
      width:"200px"
      })
      
      let startmove8 = gsap.timeline({
        scrollTrigger:{
          trigger:"#contactsection",
          start:"0% 80%",
          end:"30% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove8.to(".image-box img",{
      top:"7780px",
      right:"0px",
      
      width:"400px"
      })
      
      
    }
    else if(window.innerWidth >  500 && window.innerWidth < 1050){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"1350px",
      right:"-50px",
      // duration:1,
      })
      
      
      
      
      
    }
    else if(window.innerWidth > 400 && window.innerWidth < 500){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"1400px",
      right:"-30px",
      // duration:1,
      })
      
      
      
      
      
    }
   
    else if(window.innerWidth > 360 && window.innerWidth < 400){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 80%",
          end:"20% 80%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"1500px",
      right:"-30px",
      // duration:1,
      })
      
      
      
      
      
    }
   
    else if(window.innerWidth > 0 && window.innerWidth < 360){
    
      
      let startmove = gsap.timeline({
        scrollTrigger:{
          trigger:"#aboutsection",
          start:"0% 70%",
          end:"20% 70%",
          scrub:true,
          // markers:true,
        }
      })
      
      startmove.to(".image-box img",{
      top:"1600px",
      right:"-30px",
      // duration:1,
      })
      
      
      
      
      
    }
  
  
  






// typing text effect on logo
const logo  = document.querySelector(".sm")

const logotext = logo.innerText
// console.log(logotext.length);
let index = 1
let continues = true

function typingEffect(){
  
 if(continues){
  if(index <= logotext.length){
    const newtext = logotext.slice(0,index)
    // console.log(newtext);
    logo.innerText = newtext
    index++;
    setTimeout(typingEffect,100)

  }else{
    continues = false
    setTimeout(typingEffect,300)
  }
 }else{
  if(index > 0){
    index--
    const newtext = logotext.slice(0,index)
    // console.log(newtext);
    logo.innerText = newtext
    
    setTimeout(typingEffect,200)

  }else{
    continues = true
    setTimeout(typingEffect,300)
  }
 }
}

typingEffect()





})


// Function to calculate dynamic values
