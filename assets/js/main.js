/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
/*===== FORM SUBMISSION HANDLER =====*/
const contactForm = document.querySelector('.contact__form');
if(contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = contactForm.querySelector('[type="submit"]');
        const originalButtonText = submitButton.value;
        
        try {
            submitButton.value = "Sending...";
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });
            
            if(response.ok) {
                contactForm.reset();
                // Show success message
                const successElement = document.createElement('div');
                successElement.className = 'form-success';
                successElement.textContent = 'Message sent successfully!';
                successElement.style.color = 'green';
                successElement.style.marginTop = '15px';
                contactForm.parentNode.insertBefore(successElement, contactForm.nextSibling);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successElement.remove();
                }, 5000);
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
        } finally {
            submitButton.value = originalButtonText;
        }
    });
}

/*===== SCROLL REVEAL ANIMATION FOR EXPERIENCE =====*/
ScrollReveal().reveal('.sr-experience', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});
ScrollReveal().reveal('.sr-work', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: true
});
