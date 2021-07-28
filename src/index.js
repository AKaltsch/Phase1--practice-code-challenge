const dogURL = 'http://localhost:3000/pups'

dogList = []

function loadDogs() {
    fetch(dogURL)
    .then(resp => resp.json())
    .then(dogs => {
        dogs.forEach(dog => addToBar(dog))
        dogs.forEach(dog => dogList.push(dog))
    })
}

function addToBar(dog) {
    const dogBar = document.querySelector('#dog-bar')
    const dogSpan = document.createElement('span')
    dogSpan.innerText = dog.name
    dogBar.appendChild(dogSpan)
    dogSpan.addEventListener('click', e => identifyDog(e.target.innerText))
}

function identifyDog(dogName) {
    dogList.forEach(dog => {
        if (dog.name === dogName){
            displayInfo(dog)
        }
    })
}

function displayInfo(dog) {
        const dogInfo = document.querySelector('#dog-info')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const button = document.createElement('button')

        dogInfo.innerHTML = ""

        img.src = dog.image
        h2.textContent = dog.name
        button.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"

        dogInfo.appendChild(img)
        dogInfo.appendChild(h2)
        dogInfo.appendChild(button)
}

// function filterDogs() {
//     const filterButton = document.querySelector("#filter-div")
//     console.log(filterButton)
// }

loadDogs()
filterDogs()

// -------------------------------------------------------------

// tests 4 and 5 notes from lecture on practice.js