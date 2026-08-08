var typed = new Typed(".text", {
    strings: ["Student", "Frontend Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

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

const progressBars = document.querySelectorAll(".skills progress");

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const bar = entry.target;
            const targetValue = Number(bar.dataset.target);;
            let current = 0;

            const animate = () => {
                current +=2;
                if(current >=targetValue) {
                    bar.value = targetValue;
                    return;

                }
                bar.value = current;
                requestAnimationFrame(animate);

            };

            bar.value = 0;
            animate();
            progressObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    bar.dataset.target = bar.getAttribute("value");
    bar.value = 0;
    progressObserver.observe(bar);

});

const revealElements = document.querySelectorAll("section, footer");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = "opacity .8s ease, transform .8s ease";
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1});

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    revealObserver.observe(el);

});

const backToTopBtn = document.createAttribute("button");
backToTopBtn.innerHTML = "&#8593;";
backToTopBtn.title = "Back to top";
Object.assign(backToTopBtn.style, {
    position: "fixed",
    right: "20px",
    bottom: "25px",
    width: "45px",
    height: "45px",
    border: "none",
    borderRadius: "50%",
    background: "#0ef",
    color: "#081b29",
    fontSize: "20px",
    cursor: "pointer",
    opacity:"0",
    visibility: "hidden",
    transform: "translateY(20px)",
    transition: ".3s",
    zIndex: "99"

});
document.body.appendChild(backToTopBtn);

function toggleBackToTop() {
    if (window.scrollY > 400) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.visibility = "visible";
        backToTopBtn.style.transform = "translateY(0)";

      } else {
        backToTopBtn.style.opacity ="0";
        backToTopBtn.style.visibility = "hidden";
        backToTopBtn.style.transform = "translateY(20px)";
      }
}

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});

});
