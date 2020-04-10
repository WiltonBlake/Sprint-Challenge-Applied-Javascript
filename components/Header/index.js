// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function header() {

    const headerComponent = document.querySelector(".header-container");

    // instantiate elements
    const head = document.createElement("div");
    const date = document.createElement("span");
    const title = document.createElement("h1");
    const temp = document.createElement("span");    

    // nest elements correctly
    headerComponent.appendChild(head);
    head.appendChild(date);
    head.appendChild(title);
    head.appendChild(temp);

    // add class names
    head.classList.add("header");
    temp.classList.add("temp");

    // set text content
    date.textContent = "MARCH 28, 2019";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";

    return head;

}

header();
