const btns = document.querySelectorAll(".question-header");
const content = document.querySelectorAll(".question-body");
const buy = document.getElementById('buy1');
var scroll = document.querySelector(".section1-copy");
buy.addEventListener('click',()=>{
    scroll.scrollIntoView({ behavior: 'smooth', block: 'end'});

})


btns.forEach(btn => {
    
    btn.addEventListener('click', (e)=>{

        content.forEach((open) =>{
            if(e.target.nextElementSibling !== open && open.classList.contains("active"))
            {
                
                open.classList.remove("active");
                btns.forEach((btn) => btn.classList.remove("active"));
            }
        })

        

        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    })
})