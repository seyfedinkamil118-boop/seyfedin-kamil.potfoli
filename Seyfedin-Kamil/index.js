const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu li a');

        // Hamburger menu functionality
        hamburger.addEventListener('click',()=>{
            navMenu.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        navLinks.forEach(link=>{
            link.addEventListener('click', ()=>{
                navMenu.classList.remove('active');
            });
        });

    
    
