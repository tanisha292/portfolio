var typed = new Typed(".text", {
    strings: ["Student", "Frontend Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const links = document.querySelection(".navbar a");
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelection(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        })

    })
})
 
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current ="";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");

        }

    });

    navlinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){
            link.classList.add("active");
        }
    });
        
    
});
 
