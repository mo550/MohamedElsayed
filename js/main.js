/** Navigation Functionality **/
let openToggle = document.getElementById("open-toggle");
let closeToggle = document.getElementById("close-toggle");
const navigation = document.querySelector(".navigation");
let header = document.querySelector('.header');

openToggle.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeToggle.addEventListener("click", () => {
  navigation.classList.remove("active");
});

// Close Navigation Menu When Click Escape Button
document.onkeyup = function (e) {
  if (e.key === "Escape") {
    navigation.classList.remove("active");
  }
};

// Set background to header when scrolling
window.addEventListener('scroll', () => {
  if(window.scrollY > 15) {
    header.style.background = "rgba(51, 51, 51, 0.5)";
  } else {
    header.style.background = "transparent";
  }
})
/** ------------------------------------------------------------------ **/

/** Switching betwen sections Functionality **/
const allSections = document.querySelectorAll('.section');
const allLis = document.querySelectorAll(".nav-num li");

allLis.forEach((li) => {
  li.addEventListener('click', function() {
    allLis.forEach((li) => {
      li.classList.remove('active');
    });
      this.classList.add('active');

    // Remove show class first from allSections
    allSections.forEach((section) => {
      section.classList.remove('show');
    });

    let liDataSet = li.dataset.id;
    allSections.forEach((section) => {
      let sectionId = section.id;
      // Then add show class to setion if clicked li.id = section.id
      if(liDataSet === sectionId) {
        section.classList.add('show');
      }
    });

    
    /** Progress Animation **/
    const progressBar = document.querySelectorAll(".progress-bar span");

    if(liDataSet === "skills") {
      progressBar.forEach((el) => {
        const value = el.dataset.width;
        el.style.width = `${value}%`;
      });
    } else {
      progressBar.forEach((el) => {
        el.style.width = `0`;
      });
    }
  });
});

/* Highlighting Function */
// ==> I Update This Functionality With Animation Sections (It's Here For Reference)

// window.addEventListener('scroll', () => {
//   let scrollPosition = document.documentElement.scrollTop;

//   allSections.forEach(section => {
//     if(scrollPosition >= section.offsetTop - 150 && scrollPosition < section.offsetTop + section.offsetHeight - 500) {
//       let currentId = section.getAttribute('id');

//       // Highlight for NavLinks
//       navLinks.forEach(el => {
//         if(el.getAttribute('href') === `#${currentId}`) {
//           el.classList.add('active');
//         } else {
//           el.classList.remove('active');
//         }
//       });

//       // Highlight for NavNumber
//       allLis.forEach(li => {
//         if(li.getAttribute('href') === `#${currentId}`) {
//           li.classList.add('active');
//         } else {
//           li.classList.remove('active');
//         } 
//       });
//     }
//   });
// });
/** ------------------------------------------------------------------ **/

/** Displaying Color Scheme **/
const colorScheme = document.querySelector(".color-scheme");
const switcherBtn = document.querySelector(".switcher-btn");

switcherBtn.addEventListener("click", () => {
  colorScheme.classList.toggle("open");
});

/** Color Theme Functonality **/
const themeColors = document.querySelectorAll(".theme-color");

// Add Default Local Storage Class on Body (2)
document.querySelector(":root").style.setProperty("--main-color", localStorage.getItem("pageColor"));

themeColors.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document.querySelector(":root").style.setProperty("--main-color", dataColor);

    // Add Data To Local Storage (1)
    localStorage.setItem("pageColor", dataColor);
  });
});
/** ------------------------------------------------------------------ **/

/** Menu Items Functionality **/
const menu = [
  {
    id: 9,
    category: "web",
    title: "Portfolio Website",
    link: "https://mo550.github.io/Personal-Portfolio/",
    repoLink: "https://github.com/mo550/Personal-Portfolio",
    imgSrc: "img/project1",
  },
  {
    id: 8,
    category: "graphic",
    title: "Knight Theme",
    link: "https://mo550.github.io/black-knight/",
    repoLink: "https://github.com/mo550/black-knight",
    imgSrc: "img/project2",
  },
  {
    id: 7,
    category: "branding",
    title: "Kasper",
    link: "https://mo550.github.io/kasper/",
    repoLink: "https://github.com/mo550/kasper",
    imgSrc: "img/project3",
  },
  {
    id: 6,
    category: "agency",
    title: "Healthy Food",
    link: "https://mo550.github.io/healthyfood/",
    repoLink: "https://github.com/mo550/healthyfood",
    imgSrc: "img/project4",
  },
  {
    id: 5,
    category: "agency",
    title: "NFT",
    link: "https://mo550.github.io/NFT/",
    repoLink: "https://github.com/mo550/NFT",
    imgSrc: "img/project2",
  },
  {
    id: 4,
    category: "web",
    title: "FrontEnd Mentor",
    link: "https://mo550.github.io/fylo/",
    repoLink: "https://github.com/mo550/fylo",
    imgSrc: "img/project5",
  },
  {
    id: 3,
    category: "branding",
    title: "FrontEnd Mentor",
    link: "https://mo550.github.io/huddle/",
    repoLink: "https://github.com/mo550/huddle",
    imgSrc: "img/project6",
  },
  {
    id: 2,
    category: "web",
    title: "CV",
    link: "https://mo550.github.io/My-CV/",
    repoLink: "https://github.com/mo550/My-CV",
    imgSrc: "img/project7",
  },
  {
    id: 1,
    category: "agency",
    title: "Leon Agency",
    link: "https://mo550.github.io/loantemplate/",
    repoLink: "https://github.com/mo550/loantemplate",
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
      return `
      <div class="card">
        <div class="image">
          <img src=${el.imgSrc} alt="Project${el.id}"/>
        </div>
        <div class="hover-items">
          <div>
            <h3>Project Source</h3>
            <div class="icons">
              <span class="icon preview" data-web=${el.link}>
                <span class="icon-eye-solid"></span>
              </span>
              <a class="icon" href=${el.repoLink} target="_blank">
                <span class="icon-code-branch-solid"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
    })
    .join("");

  // Appending Created MenuItems To Menu Container
  const menuContainer = document.querySelector(".menu-container");
  menuContainer.innerHTML = displayMenu;

  // Triggering Preview Function
  previewPopup();
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

/** Preview Popup Functionality **/
function previewPopup() {
  const previewPopup = document.querySelector('.preview-popup'),
  closePreview = document.getElementById('close-preview'),
  previewBtns = document.querySelectorAll('.preview'),
  websiteFrame = document.getElementById('website-frame'),
  frameLoader = document.getElementById('frame-loader'),
  currentWebInd = document.querySelector('.current-web'),
  totalWebPages = document.querySelector('.total-web');

  // Set Websites Count Depending on previewBtns
  totalWebPages.innerHTML = previewBtns.length;

  // Close closePreview when clicking X button
  closePreview.addEventListener('click', () => {
    previewPopup.classList.remove('show');
    // Reset iframe src to default
    websiteFrame.src = "";
  });

  // Open previewPopup when clicking any of previewBtns
  previewBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      previewPopup.classList.add('show');
      // Set src of the iframe to previewBtn dataset (link)
      websiteFrame.src = `${btn.dataset.web}`;
      // Set current website index
      currentWebInd.innerHTML = index + 1;
      frameLoader.style.visibility = "visible";
    });
  });

  // Hide preLoader when iframe finished loading
  websiteFrame.addEventListener('load', () => {
    frameLoader.style.visibility = "hidden";
  });
}
/** ------------------------------------------------------------------ **/


/** Slider Functionality **/
const sliderTxt = [
  {
    id: 5,
    clientName: "Robert W.",
    feedback: `Very Responsive. Good Communications.`,
  },
  {
    id: 4,
    clientName: "Damon C.",
    feedback: `Mohamed did an exceptional job. He communicated perfectly and delivered all work quickly and exactly to specifications. He has excellent technical capabilities. Thanks Mohamed. We look forward to working with you in the future.`,
  },
  {
    id: 3,
    clientName: "Nikhil P.",
    feedback: `It was a pleasure to work with Mohamed. He is knowledgeable and always helpful. Really easy to work with, a wonderful experience!`,
  },
  {
    id: 2,
    clientName: "Nikhil P.",
    feedback: `A real pleasure working with this freelancer. Understood requirements clearly and worked really quickly in producing exactly what we wanted. Attention to detail and was always available for any changes.`,
  },
  {
    id: 1,
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
      <span class="quote"><span class="icon-quote-right-solid"></span></i></span>
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

/** Loader Functionality **/
const loader = document.querySelector('.loader');
window.onload = () => loader.style.display = 'none';
/** ------------------------------------------------------------------ **/