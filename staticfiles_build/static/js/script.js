
// for dark and light mode 
const darkmodebtn = document.querySelectorAll(".dark-light-mode")
// console.log(darkmodebtn);
const lightmode = document.querySelectorAll(".lightmodes")
const darkmode = document.querySelectorAll(".darkmodes")
console.log(lightmode[1]);
console.log(darkmode[1]);


darkmodebtn.forEach((data)=>{
    data.addEventListener("click",()=>{
        document.body.classList.toggle("darkmode")
        if(document.body.className === "darkmode"){
        darkmode.forEach((dm)=>{
            dm.style.display="none"
        })
        lightmode.forEach((lm)=>{
            lm.style.display="block"
        })


        // darkmode.style.display = "none"
        //     lightmode.style.display="block"
        }
        else{
            // darkmode.style.display = "block"
            // lightmode.style.display="none" 
            darkmode.forEach((dm)=>{
                dm.style.display="block"
            })
            lightmode.forEach((lm)=>{
                lm.style.display="none"
            })
    
        }
    })
})


// for responsive navbar 

const navbar = document.querySelector(".nav")
const closenavbar = document.querySelector(".close-navbar")
const narbarstart = document.querySelector(".hamburger")

narbarstart.addEventListener("click",()=>{
    navbar.style.right = "18px"
})
closenavbar.addEventListener("click",()=>{
    navbar.style.right = "-100%"
})




const closepdf = document.querySelector(".closepfd")
const openpdfbox = document.querySelector("#myresumeopen")
const pdfbox = document.querySelector(".myresumebox")



openpdfbox.addEventListener("click",()=>{
    pdfbox.style.display = "flex"
   
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
})
closepdf.addEventListener("click",()=>{
    pdfbox.style.display = "none"
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    document.body.style.height = '';
    document.body.style.overflow = '';
})




// for project 

const viewbutton = document.querySelectorAll(".view-icon")
const overbox = document.querySelectorAll(".overlay-2")
// const overlaybox = document.querySelectorAll(".overlay-2")



viewbutton.forEach((btn,index) => {
    btn.addEventListener("mouseenter", (e) => {
        console.log(e.target);
        
        overbox.forEach((box,index2) => {
            console.log(box);
if(index === index2){
    box.style.transition = "top 0.3s ease"; // Optional: for smooth animation
    box.style.top = "0px"; // Slide in from the top
}

            
           
               
         
              
           
        });
    });

    // btn.addEventListener("mouseleave", () => {
    //     overbox.forEach((box) => {
    //         box.style.transition = "top 0.3s ease"; // Optional: for smooth animation
    //         box.style.top = "100%"; // Slide out to hide
    //     });
    // });
});

overbox.forEach((overbox)=>{
    overbox.addEventListener("mouseleave",()=>{
        overbox.style.transition = "top 0.3s ease"; // Optional: for smooth animation
        overbox.style.top= "100%"
    })
})