// ================= MENU FILTER =================

const filterButtons = document.querySelectorAll('.filter-btn');

const menuCards = document.querySelectorAll('.menu-card');


// FILTER BUTTON CLICK
filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        const filter = button.dataset.filter;


        // REMOVE ACTIVE CLASS
        filterButtons.forEach(btn => {

            btn.classList.remove('active');

        });


        // ADD ACTIVE CLASS
        button.classList.add('active');


        // FILTER MENU CARDS
        menuCards.forEach(card => {

            if (
                filter === 'all' ||
                card.dataset.category === filter
            ) {

                card.style.display = 'block';

            } else {

                card.style.display = 'none';

            }

        });

    });

});



// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );


        // CHECK TARGET EXISTS
        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});



// ================= SCROLL ANIMATION =================

const scrollElements = document.querySelectorAll(

    '.menu-card, .feature-card, .testimonial-card'

);


// INTERSECTION OBSERVER
const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = '1';

                entry.target.style.transform = 'translateY(0)';

            }

        });

    },

    {
        threshold:0.1
    }

);


// INITIAL STYLES
scrollElements.forEach(el => {

    el.style.opacity = '0';

    el.style.transform = 'translateY(50px)';

    el.style.transition = 'all 0.6s ease-out';


    // OBSERVE ELEMENT
    observer.observe(el);

});