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

// const nav1 = document.querySelectorAll("a");
// nav1.innerHTML = siteContent["nav"]
const navItem1 = document.getElementsByTagName("a")[0];
navItem1.textContent = siteContent.nav["nav-item-1"];

const navItem2 = document.getElementsByTagName("a")[1];
navItem2.textContent = siteContent.nav["nav-item-2"];

const navItem3 = document.getElementsByTagName("a")[2];
navItem3.textContent = siteContent.nav["nav-item-3"];

const navItem4 = document.getElementsByTagName("a")[3];
navItem4.textContent = siteContent.nav["nav-item-4"];

const navItem5 = document.getElementsByTagName("a")[4];
navItem5.textContent = siteContent.nav["nav-item-5"];

const navItem6 = document.getElementsByTagName("a")[5];
navItem6.textContent = siteContent.nav["nav-item-6"];

const ctaH1 = document.getElementsByTagName("h1")[0];
ctaH1.textContent = siteContent.cta["h1"];

const button1 = document.getElementsByTagName("button")[0];
button1.textContent = siteContent.cta["button"];


const imgHeader = document.getElementById("cta-img");
imgHeader.setAttribute('src', siteContent["cta"]["img-src"]);


let textContentList = document.querySelectorAll(".text-content"); //this is the div class name, we are going to grab 
//this box and all that is in it, <p><h>

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"]
//varibaleName[index...each element has its own array].getBlahBlahTagName("tag name")[I don't know why this is 0, it's 0 for all of them].innerHTML is 
//just getting to the guts of it. = siteContent is where its coming from[main-content is mroe of where it's coming from]
//[feauter-h4 is it's name/key name]
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];

const imgMid = document.getElementById("middle-img");
imgMid.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let contactList = document.querySelectorAll(".contact");

contactList[0].getElementsByTagName("h4")[0].innerHTML =siteContent["contact"]["contact-h4"];
contactList[0].getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contactList[0].getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactList[0].getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];
///why? does this have to be contactList[0] on all of them? Only way I got it to work...


const footer = document.getElementsByTagName("footer")[0];
footer.textContent = siteContent.footer["copyright"];






 















