const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

const lazyBackgrounds = document.querySelectorAll("[data-bg]");
const loadBackground = (element) => {
    const background = element.getAttribute("data-bg");
    if (!background) {
        return;
    }
    element.style.backgroundImage = `url("${background}")`;
    element.removeAttribute("data-bg");
};

if ("IntersectionObserver" in window) {
    const lazyObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                loadBackground(entry.target);
                observer.unobserve(entry.target);
            });
        },
        {
            rootMargin: "200px 0px",
            threshold: 0.01,
        }
    );

    lazyBackgrounds.forEach((element) => lazyObserver.observe(element));
} else {
    lazyBackgrounds.forEach(loadBackground);
}

// Keep hero image fixed instead of parallax shifting on scroll.
if (parallax) {
    parallax.style.backgroundPositionX = "-100px";
}


const canParallax = () => window.matchMedia("(min-width: 1001px)").matches;

const updateParallax1 = () => {
    if (!parallax1 || !canParallax()) {
        return;
    }
    let offset = window.pageYOffset;
    offset -= 3100;
    parallax1.style.backgroundPositionY = offset * 0.1 + "px";
};

const updateParallax2 = () => {
    if (!parallax2 || !canParallax()) {
        return;
    }
    let offset = window.pageYOffset;
    offset -= 4800;
    parallax2.style.backgroundPositionY = offset * -0.1 + "px";
};

window.addEventListener("scroll", function() {
    updateParallax1();
    updateParallax2();
});

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);
