const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// navigation
const navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

// top content

const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const codeSnip = document.querySelector('#cta-img');
codeSnip.setAttribute('src', siteContent['cta']['img-src']);

// middle content

const mainContentH4 = document.querySelectorAll('.text-content h4');
mainContentH4[0].textContent = siteContent['main-content']['features-h4'];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

const middleIMG = document.querySelector('.middle-img');
middleIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainContentP = document.querySelectorAll('.text-content p');
mainContentP[0].textContent = siteContent['main-content']['features-content'];
mainContentP[1].textContent = siteContent['main-content']['about-content'];
mainContentP[2].textContent = siteContent['main-content']['services-content'];
mainContentP[3].textContent = siteContent['main-content']['product-content'];
mainContentP[4].textContent = siteContent['main-content']['vision-content'];

// contact info content

const contactInfoH4 = document.querySelector('.contact h4');
contactInfoH4.textContent = siteContent['contact']['contact-h4'];

const contactInfoP = document.querySelectorAll('.contact p');
contactInfoP[0].textContent = siteContent['contact']['address'];
contactInfoP[1].textContent = siteContent['contact']['phone'];
contactInfoP[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

const navAdd = document.querySelector('nav');
navAdd.append('Blog');
navAdd.prepend('Learn More');
navAdd.style.color = 'green';

document.querySelectorAll('a').forEach((element) => {
 element.style.color = 'green';
});

