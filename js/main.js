/** Navigation Functionality **/
let openToggle = document.getElementById("open-toggle");
let closeToggle = document.getElementById("close-toggle");
const navigation = document.querySelector(".navigation");

openToggle.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeToggle.addEventListener("click", () => {
  navigation.classList.remove("active");
});

// Close Menu When Click Escape Button
document.onkeyup = function (e) {
  // console.log(e);
  if (e.key === "Escape") {
    navigation.classList.remove("active");
  }
};
/** ------------------------------------------------------------------ **/

/** Highlights NavLinks & NavNumber When Reaching Its Section **/
const allSections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll(".navLinks li a");
const allLis = document.querySelectorAll(".nav-num li a");
const allSectionsLength = allSections.length;

window.addEventListener('scroll', () => {
  let scrollPosition = document.documentElement.scrollTop;

  allSections.forEach(section => {
    if(scrollPosition >= section.offsetTop - 150 && scrollPosition < section.offsetTop + section.offsetHeight - 500) {
      let currentId = section.getAttribute('id');

      // Highlight for NavLinks
      navLinks.forEach(el => {
        if(el.getAttribute('href') === `#${currentId}`) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });

      // Highlight for NavNumber
      allLis.forEach(li => {
        if(li.getAttribute('href') === `#${currentId}`) {
          li.classList.add('active');
        } else {
          li.classList.remove('active');
        } 
      });
    }
  });
});
/** ------------------------------------------------------------------ **/

/** Displaying Color Scheme **/
const colorScheme = document.querySelector(".color-scheme");
const switcherBtn = document.querySelector(".switcher-btn");

switcherBtn.addEventListener("click", () => {
  colorScheme.classList.toggle("open");
});

/** Color Theme Functonality **/
const themeButtons = document.querySelectorAll(".theme-button");

// Add Default Local Storage Class on Body (2)
document
  .querySelector(":root")
  .style.setProperty("--main-color", localStorage.getItem("pageColor"));

themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("--main-color", dataColor);

    // Add Data To Local Storage (1)
    localStorage.setItem("pageColor", dataColor);
  });
});
/** ------------------------------------------------------------------ **/

/** Progress Animation **/
const skillSection = document.getElementById("skills");
const progressBar = document.querySelectorAll(".progress-bar span");
const skilldcon = document.getElementById("progress-container")
function showProgress() {
  progressBar.forEach((el) => {
    const value = el.dataset.width;
    el.style.width = `${value}%`;
  });
}
function hideProgress() {
  progressBar.forEach((el) => {
    el.style.width = `0`;
  });
}

// Trigger The Show & Hide Function
window.addEventListener("scroll", () => {
  if(window.scrollY >= skillSection.offsetTop - 300) {
    showProgress(); 
  } else {
    hideProgress();
  }
});
/** ------------------------------------------------------------------ **/

/** Menu Items Functionality **/
const menu = [
  {
    id: 1,
    category: "web",
    title: "Portfolio Website",
    link: "https://mo550.github.io/Personal-Portfolio/",
    imgSrc: "img/project6",
  },
  {
    id: 2,
    category: "graphic",
    title: "Knight Theme",
    link: "https://mo550.github.io/black-knight/",
    imgSrc: "img/project2",
  },
  {
    id: 3,
    category: "branding",
    title: "Kasper",
    link: "https://mo550.github.io/kasper/",
    imgSrc: "img/project3",
  },
  {
    id: 4,
    category: "agency",
    title: "Healthy Food",
    link: "https://mo550.github.io/healthyfood/",
    imgSrc: "img/project4",
  },
  {
    id: 5,
    category: "web",
    title: "FrontEnd Mentor",
    link: "https://mo550.github.io/fylo/",
    imgSrc: "img/project8",
  },
  {
    id: 6,
    category: "branding",
    title: "FrontEnd Mentor",
    link: "https://mo550.github.io/huddle/",
    imgSrc: "img/project6",
  },
  {
    id: 7,
    category: "web",
    title: "CV",
    link: "https://mo550.github.io/My-CV/",
    imgSrc: "img/project2",
  },
  {
    id: 8,
    category: "agency",
    title: "Leon Agency",
    link: "https://mo550.github.io/loantemplate/",
    imgSrc: "img/project8",
  },
];

window.addEventListener('DOMContentLoaded', () => {
  // Triggering The DisplayMenuFilterBtns Function
  displayFilterBtns();
  // Triggering The DisplayMenuItems Function
  displayMenuItems(menu);
});

// Displaying Menu Cards
function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map((el) => {
      return `<div class="card">
      <h3 class="card-title">${el.title}</h3>
      <picture>
        <img src=${el.imgSrc} alt="Project${el.id}" 
             style="width:100%; height:100%; object-fit: cover; object-position: center; border-radius: 15px;"
        />
      </picture>
      <a href=${el.link} target="_blank" class="web-link">Visit The Website</a>
    </div>`;
    })
    .join("");

  // Appending Created MenuItems To Menu Container
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.innerHTML = displayMenu;
}

// Displaying Menu Filter Btns
function displayFilterBtns() {
  // Filtering Menu Category To Create Filter Buttons
  let menuFilterCategory = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  // Creating Filter Btns
  let categoryBtns = menuFilterCategory
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");

  // Appending Created Btns To Btns Container
  const btnsContainer = document.querySelector(".menu-btns");
  btnsContainer.innerHTML = categoryBtns;

  // Add Class Active To The First Child (All)
  btnsContainer.firstElementChild.classList.add("active");

  // Filtering Menu When Clicking Filter Menu
  const filterBtns = btnsContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      let menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // Add Class Active To Target Button To Be Colored
      filterBtns.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");

      // Run Filter Menu
      if (category === "all") {
        return displayMenuItems(menu);
      } else {
        return displayMenuItems(menuCategory);
      }
    });
  });
}
/** ------------------------------------------------------------------ **/

/** Slider Functionality **/
const sliderTxt = [
  {
    id: 1,
    clientName: "Damon C.",
    feedback: `Mohamed did an exceptional job. He communicated perfectly and delivered all work quickly and exactly to specifications. He has excellent technical capabilities. Thanks Mohamed. We look forward to working with you in the future.`,
  },
  {
    id: 2,
    clientName: "Nikhil P.",
    feedback: `It was a pleasure to work with Mohamed. He is knowledgeable and always helpful. Really easy to work with, a wonderful experience!`,
  },
  {
    id: 3,
    clientName: "Nikhil P.",
    feedback: `A real pleasure working with this freelancer. Understood requirements clearly and worked really quickly in producing exactly what we wanted. Attention to detail and was always available for any changes.`,
  },
  {
    id: 4,
    clientName: "Nada A.",
    feedback: `I'm happy to work with you, you have a high skill in development, for sure I will work with you again if I need anything related to this subject :)`,
  },
];
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let sliderContainer = document.querySelector(".slider-container");

// Displaying Testimonials Slide Box
(function displaySlideBox() {
  // Displaying Each Slides
  let slideContent = sliderTxt
    .map((slide) => {
      return `
    <div class="slide">
      <span class="quote"><i class="fas fa-quote-right"></i></span>
      <img class="client-img" src="img/man.png" alt="Client">
      <div class="stars">
        <span class="icon-star-solid"></span>
        <span class="icon-star-solid"></span>
        <span class="icon-star-solid"></span>
        <span class="icon-star-solid"></span>
        <span class="icon-star-solid"></span>
      </div>
      <h3 class="client-name">${slide.clientName}</h3>
      <q>${slide.feedback}</q>
      <div class="upwork-logo">
        <img src="img/upwork-logo.png" alt="upwork-logo">
      </div>
    </div>`;
    })
    .join("");

  // Appending All Slides To Slider Container
  sliderContainer.innerHTML = slideContent;

  // Moving Each Slide To The Left By (index * 100)
  let allSlides = sliderContainer.querySelectorAll(".slide");
  allSlides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });

  // Next & Prev Slide Function
  let currentSlide = 0;
  nextBtn.addEventListener("click", function () {
    currentSlide++;
    checker();
  });
  prevBtn.addEventListener("click", function () {
    currentSlide--;
    checker();
  });

  // Creating Indicators Li For Each Slide
  const IndicatorsUl = document.querySelector(".indicators");
  let slideLength = allSlides.length;

  for (let i = 1; i <= slideLength; i++) {
    let indicatorsLi = document.createElement("li");
    // Set Custom Attribute
    indicatorsLi.setAttribute("data-index", i);
    // Creating The Text Inside The Li's
    indicatorsLi.appendChild(document.createTextNode(`0${i}`));
    // Append Li to paginationElement
    IndicatorsUl.appendChild(indicatorsLi);
  }

  // Create Checker Function
  function checker() {
    if (currentSlide === allSlides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = allSlides.length - 1;
    }
    // Moving Each Slide In X Direction by -+100% For Every Click
    allSlides.forEach((slide) => {
      slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    // Remove  All Active Class From Li
    removeAllClasses();

    //Adding Active Class To Selected Indicators Li
    IndicatorsUl.children[currentSlide].classList.add("active");
  }

  // Remove Active Class From The Indicators Li's
  let createdIndicatorsLi = document.querySelectorAll(".indicators li");
  createdIndicatorsLi[0].classList.add("active");

  // Remove Active Class From Li
  function removeAllClasses() {
    createdIndicatorsLi.forEach(function (li) {
      li.classList.remove("active");
    });
  }
})(); // Self Invoked Function
/** ------------------------------------------------------------------ **/

/** Initialize AOS Library **/
// (function() {
//   AOS.init({
//     duration: 700,
//     offset: 200,
//     mirror: false,
//     once: false
//   });
//   window.addEventListener('load', AOS.refresh);
// }());
/** ------------------------------------------------------------------ **/

/** Loader Functionality **/
const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
  loader.style.opacity = '0';
  loader.style.display = 'none';
});
/** ------------------------------------------------------------------ **/

/** ScrollToTopFunctionality **/
const scrollToTop = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if(window.scrollY > 700) {
    scrollToTop.classList.add('active');
  }
  else {
    scrollToTop.classList.remove('active');
  }
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
/** ------------------------------------------------------------------ **/


