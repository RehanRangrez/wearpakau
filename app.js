const navslide=()=>{
    console.log('hiii')
    const burger=document.querySelector('.burger')
    const navlinks=document.querySelector('.navlinks')
    const closebutton=document.querySelector('.closebutton')
    burger.addEventListener('click',()=>{
        console.log('clicked')
        navlinks.classList.toggle('navactive')
        closebutton.classList.toggle('showclosebutton')
    })
    closebutton.addEventListener('click',()=>{
        console.log("closeclicked")
        navlinks.classList.toggle('navactive')
        closebutton.classList.toggle('showclosebutton')
    })
}
navslide()



