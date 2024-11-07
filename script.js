// console.log("ciao");

/**
 *  <div class="col-33">
                <div class="card_container">
                    <figure class="pin">
                        <img src="./img/pin.svg" alt="">
                    </figure>
                    <figure>
                        <img src="./img/92c952.png" alt="">
                    </figure>
                    <div class="card_description">
                        <span>Accusamus Beatae Ad Facilis Cum Similique Qui Sunt</span>
                    </div>
                </div>
            </div>        
 */


// Effettuiamo una chiamata AJAX all’API di JSON Placeholder
// Generiamo l'html con i dati delle varie card da mettere nel DOM

const cardListEl = document.querySelector('.card_list')

axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then((res) => {
        const cards = res.data
        appendCards(cards, cardListEl)
    })
    .catch((err) => {
        console.log('Abbiamo un errore:' , err)
    })


function appendCards(cards, root) {
    // console.log("Cards array", cards)
    // console.log("Root Element", root)
    cards.forEach((post) => {
        // console.log(post);
        
        const { url , title } = post

        const photoCardHTML = `<div class="col-33">
                <div class="card_container">
                    <figure class="pin">
                        <img src="./img/pin.svg" alt="">
                    </figure>
                    <figure class="image_clickable">
                        <img class="image_changeable" src="${url}" alt="">
                    </figure>
                    <div class="card_description">
                        <span>${title}</span>
                    </div>
                </div>
            </div>        
        `;

        root.innerHTML += photoCardHTML
    })

    const cardsEl = document.querySelectorAll('div.card_container')
    // const cardImage = document.querySelectorAll('img.image_changeable')
    const viewportImg = document.getElementById('viewport_img_active')

    // console.log(cardImage[1].src)
    // console.log(cardsEl);
    // console.log(viewportImg.src);
    
    for (let i = 0; i < cardsEl.length; i++) {
        cardsEl[i].addEventListener('click', () => {
            overlayEl.style.display = ''
            viewportImg.src = cards[i].url
        })
        
    }
}

// AGGIUNGO L'EVENTO SUL TASTO PER CHIUDERE L'IMMAGINE CHE E' STATA APERTA

const overlayEl = document.getElementById ('overlaySection')
const closeButton = document.getElementById ('btn')


closeButton.addEventListener('click', () => {
    overlayEl.style.display = 'none'
})

// CREO UNA FUNZIONE ONCLICK CHE MI FA COMPARIRE IL POPUP

// function openPopup () {
//     overlayEl.style.display = ''
// }

