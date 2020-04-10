// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container")

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data.articles);

        // access each topics array of articles
        const jsArticles = response.data.articles.javascript;
        const bootstrapArticles = response.data.articles.bootstrap;
        const techArticles = response.data.articles.technology;
        const jqueryArticles = response.data.articles.jquery;
        const nodeArticles = response.data.articles.node;

        // iterate through arrays and attach to the DOM
        jsArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        });
        bootstrapArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        });
        techArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        });
        jqueryArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        });
        nodeArticles.forEach(article => {
            cardsContainer.appendChild(createCard(article))
        });
        
    })
    .catch(err => {
        console.log("The data was not returned.")
    })

function createCard (cards) {

  // instantiate elements
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imageDiv = document.createElement("div");
    const authorImage = document.createElement("img");
    const authorName = document.createElement("span");

  // nest elements correctly
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageDiv);
    imageDiv.appendChild(authorImage);
    author.appendChild(authorName);


  // add class names
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imageDiv.classList.add("img-container");
    authorImage.src = cards.authorPhoto;

  // set text content
    headline.textContent = cards.headline;
    authorName.textContent= `BY ${cards.authorName}`;

    return card
}


