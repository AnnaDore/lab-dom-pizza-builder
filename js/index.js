// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMash) => {
    if (state.mushrooms) {
      oneMash.style.visibility = "visible";
    } else {
      oneMash.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  let souceView = document.querySelector(".sauce");

  if (!state.whiteSauce) {
    state.whiteSauce = true;
    souceView.classList.remove("sauce-white");
  } else {
    state.whiteSauce = false;
    souceView.classList.add("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenView = document.querySelector(".crust");

  if (!state.glutenFreeCrust) {
    state.glutenFreeCrust = true;
    glutenView.classList.remove("crust-gluten-free");
  } else {
    state.glutenFreeCrust = false;
    glutenView.classList.add("crust-gluten-free");
  }
}

function renderButtons() {
  let pepperoniButton = document.querySelector(".btn.btn-pepperoni");
  pepperoniButton.classList.remove("active");
  let mashroomButton = document.querySelector(".btn-mushrooms");
  mashroomButton.classList.remove("active");
  let peppersButton = document.querySelector(".btn-green-peppers");
  peppersButton.classList.remove("active");
  let sauseButton = document.querySelector(".btn-sauce");
  sauseButton.classList.remove("active");
  let glutenButton = document.querySelector(".btn-crust");
  glutenButton.classList.remove("active");
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ul = [...document.querySelectorAll('aside ul li')]; 

  let pepperoni = document.querySelector('.pepperoni');
  let mushrooms = document.querySelector('.mushrooms');
  let peppers = document.querySelector('.peppers');
  let white = document.querySelector('.white');
  let gluten = document.querySelector('.gluten');

  if (!state.pepperoni) {
    pepperoni.classList.add('hidden')
  } else {
    pepperoni.classList.remove('hidden')
  }
  if (!state.mushrooms) {
    mushrooms.classList.add('hidden')
  } else {
    mushrooms.classList.remove('hidden')
  }

  if (!state.greenPeppers) {
    peppers.classList.add('hidden')
  } else {
    peppers.classList.remove('hidden')
  }

  if (state.whiteSauce) {
    white.classList.add('hidden')
  } else {
    white.classList.remove('hidden')
  }
 
  if (state.glutenFreeCrust) {
    gluten.classList.add('hidden')
  } else {
    gluten.classList.remove('hidden')
  } 
  let totalHolder = document.querySelector('.total')
  //console.log(ul[1].innerHTML[1]);
  //console.log(totalHolder.innerHTML)
  let totalContent = 0;
  for (let i = 0; i < ul.length; i++) {

     totalContent += ul[i].innerHTML[1]
     return totalContent 
  }
/*   let ulArr = ul.reduce((acc, item) => {
    return acc + item.innerHTMl
  }, 0) */
  
  totalHolder.innerHTML = totalContent;

}
renderEverything();
renderPrice();

let pepperoniButton = document
  .querySelector(".btn.btn-pepperoni")
  .addEventListener("click", () => {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

let mashroomButton = document
  .querySelector(".btn-mushrooms")
  .addEventListener("click", () => {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

let peppersButton = document
  .querySelector(".btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

let sauseButton = document
  .querySelector(".btn-sauce")
  .addEventListener("click", () => {
    state.whiteSauce = state.whiteSauce;
    renderEverything();
    
  });

let glutenButton = document
  .querySelector(".btn-crust")
  .addEventListener("click", () => {
    state.glutenFreeCrust = state.glutenFreeCrust;
    renderEverything();
    
  });
