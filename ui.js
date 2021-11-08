function UI() {

};

UI.prototype.printNextElementToUI = () => {
    let currentElement = document.getElementById("author").innerText;
    arrayCard.forEach((card, index) => {
        if (card.name == currentElement) {
            if (index + 1 == arrayCard.length) {
                cardContainer.innerHTML = `    <div class="img-container">
                        <img src="./image/image-${arrayCard[0].imgNumber}.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">${arrayCard[0].name}</h4>
                    <p id="job">${arrayCard[0].job}</p>
                    <p id="info">${arrayCard[0].info}</p>`
            } else {
                cardContainer.innerHTML = `    <div class="img-container">
                        <img src="./image/image-${arrayCard[index+1].imgNumber}.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">${arrayCard[index+1].name}</h4>
                    <p id="job">${arrayCard[index+1].job}</p>
                    <p id="info">${arrayCard[index+1].info}</p>`
            }
        }
    })

}
UI.prototype.printPrevElementToUI = () => {
    let currentElement = document.getElementById("author").innerText;
    arrayCard.forEach((card, index) => {
        if (card.name == currentElement) {
            if (index - 1 < 0) {
                cardContainer.innerHTML = `    <div class="img-container">
                        <img src="./image/image-${arrayCard[arrayCard.length -1].imgNumber}.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">${arrayCard[arrayCard.length-1].name}</h4>
                    <p id="job">${arrayCard[arrayCard.length-1].job}</p>
                    <p id="info">${arrayCard[arrayCard.length -1].info}</p>`
            } else {
                cardContainer.innerHTML = `    <div class="img-container">
                        <img src="./image/image-${arrayCard[index-1].imgNumber}.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">${arrayCard[index-1].name}</h4>
                    <p id="job">${arrayCard[index-1].job}</p>
                    <p id="info">${arrayCard[index-1].info}</p>`
            }
        }
    })

}

UI.prototype.printRandomElementToUI = () => {
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    arrayCard.forEach((card, index) => {
        if (card.imgNumber == randomNumber) {
            cardContainer.innerHTML = `    <div class="img-container">
                        <img src="./image/image-${card.imgNumber}.jpg" id="person-img" alt="" />
                    </div>
                    <h4 id="author">${card.name}</h4>
                    <p id="job">${card.job}</p>
                    <p id="info">${card.info}</p>`
        }
    })


}