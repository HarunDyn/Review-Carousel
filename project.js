const nextButton = document.querySelector(".next-btn").children[0];
const prevButton = document.querySelector(".prev-btn").children[0];
const cardContainer = document.querySelector(".card-conatiner");
const random = document.querySelector(".random-btn")



const ui = new UI();


eventListeners();

function eventListeners() {
    nextButton.addEventListener("click", nextElementInArray);
    prevButton.addEventListener("click", prevElementInArray);
    random.addEventListener("click", selectRandomElement)
}

function nextElementInArray() {
    ui.printNextElementToUI();
}

function prevElementInArray() {
    ui.printPrevElementToUI();
}

function selectRandomElement() {
    ui.printRandomElementToUI();
}