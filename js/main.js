/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

//************************* */
//function for navbr
// count becouse a plus id and section count
countSection = 4;
// count becouse a plus id and nvabar count
conutNavBar = 0;
function createNav() {
  conutNavBar++;
  // query ul navbar
  let nav = document.querySelector("#navbar__list");
  // create li for ul
  let createLi = `<li><a class="menu__link" href="#section${conutNavBar}"data-nav='section ${conutNavBar}'>section ${conutNavBar}</a></li>`;
  nav.innerHTML += createLi;
}
let sectionList = document.querySelectorAll("section").length;

for (i = 0; i < sectionList; i++) {
  createNav();
}
//function for create section

function addSection() {
  //a plus section id +1
  countSection++;
  //query main
  let main = document.querySelector("main");
  //create section
  let sectoin = document.createElement("section");
  // add id for section
  sectoin.id = `section${countSection}`;
  //add data set
  sectoin.dataset.nav = `section ${countSection}`;
  //create div
  let div = document.createElement("div");
  // add classlist to div
  div.classList = "landing__container";
  // create heading
  let h2 = document.createElement("h2");
  // text in heading
  h2.innerHTML = `section ${countSection}`;
  //create paragraph
  let para = document.createElement("p");
  para.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbifermentum metus faucibus lectus pharetra dapibus. Suspendissepotenti. Aenean aliquam elementum mi, ac euismod augue. Donec egetlacinia ex. Phasellus imperdiet porta orci eget mollis. Sedconvallis sollicitudin mauris ac tincidunt. Donec bibendum, nullaeget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quamnunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duislectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi atincidunt felis. Sed leo nunc, pharetra et elementum non, faucibusvitae elit. Integer nec libero venenatis libero ultricies molestiesemper in tellus. Sed congue et odio sed euismod.";
  // add setion in main
  main.appendChild(sectoin);
  // add div in setion
  sectoin.appendChild(div);
  //add h2 to div
  div.appendChild(h2);
  //add paragraph to div
  div.appendChild(para);
}
//function for button add section and li
function click() {
  // create button
  let button = document.createElement("input");
  button.type = "button";
  button.value = "Add section";
  button.classList = "button-add";
  document.querySelector(".page__header").appendChild(button);
  // funtion when click on button
  button.addEventListener("click", createNav);
  button.addEventListener("click", addSection);
  button.addEventListener("click", activeSection);
}
click();
// active in section
function activeSection() {
  // call all sction
  option = {
    root: null, //by defult
    threshold: 0.7, // when see 70% from section add active class
  };
  //qurey all scrions
  let sections = document.querySelectorAll("section");
  // create observer for know this sction
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // qurey link or li becouse active class
      let a = document.querySelector(`a[href="#${entry.target.id}"]`);
      //condtion for when leave section remove active class
      // i can use toggel but i found some issues
      if (entry.isIntersecting) {
        entry.target.classList.add("your-active-class");
        a.classList.add("active");
        location.href = `#${entry.target.id}`;
      } else {
        entry.target.classList.remove("your-active-class");
        a.classList.remove("active");
        location.hash = "";
      }
    });
  }, option);
  sections.forEach((section) => {
    observer.observe(section);
  });
}
activeSection();

// fucntion create button for to TOP
function ToTop() {
  let button = document.createElement("input");
  let footer = document.querySelector("footer");
  button.value = "to top";
  button.type = "button";
  button.classList = "top";

  footer.appendChild(button);
  window.onscroll = () => {
    if (this.scrollY > 250) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    location.hash = "";
  });
}
ToTop();
