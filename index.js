console.log("connected")

let forumModel = {
    name: "Brian",
    occupation: "Dole receiver",
    startingPrice: 30
}

// let candy = [
//     {
//       name: 'Snickers',
//       price: 2.5,
//       img: 'https://www.gosoftstuff.com/web/image/product.template/33444/image_1024?unique=f3e5e4e',
//       quanity: 5,
//     },

let forum = [
{
    name: "Alice",
    occupation: "Writer",
    startingPrice: 30,
},
{
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50
},
{
    name: "Carol",
    occupation: "Programmer",
    startingPrice: 70
},
{
    name: "Dufus",
    occupation: "Dairycow",
    startingPrice: 10
},
{
    name: "Edward",
    occupation: "Eggman",
    startingPrice: 80
},
{
    name: "Fernando",
    occupation: "ABBA Tribute Musician",
    startingPrice: 20
},
{
    name: "Geraldo",
    occupation: "Tabloid Talk Show Host",
    startingPrice: 90
},
{
    name: "Haralambos",
    occupation: "Gambler",
    startingPrice: 100
},
{
    name: "Jojo",
    occupation: "Cigarette Manufacturer",
    startingPrice: 60
}
]
// function renderCandy() {
//     let candyBag = document.getElementById('candy-bag')
  
//     for (let i = 0; i < candy.length; i++) {
//       let currentCandy = candy[i]
  
//       // Create the parent element
//       let candyDiv = document.createElement('div')
//       candyDiv.className = 'candy'
  
//       // Add content to that element
//       candyDiv.innerHTML = `<h1>${currentCandy.name}</h1>
//                             <h3>Price: $ ${currentCandy.price}</h3>
//                             <h3>Quantity: ${currentCandy.quanity}</h3>
//                             <img src=${currentCandy.img}</img>`
  
//       // Append the element to the actual page
//       candyBag.appendChild(candyDiv)
//     }
//   }
function renderForum(){
    let freelancerForum = document.getElementById('freelancer-forum')

    for (let i = 0; i < forum.length; i++) {
        let currentFreelancer = forum[i]
        let forumDiv = document.createElement('div')
        forumDiv.className = 'forum'

        forumDiv.innerHTML = 
        `<h3>${currentFreelancer.name}</h3>
        <h3>${currentFreelancer.occupation}</h3>
        <h3>$${currentFreelancer.startingPrice}</h3>`
        freelancerForum.appendChild(forumDiv)
    }
}

renderForum()

// function rainbowRandomizer() {
//     let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  
//     let selectedColor = colors[Math.floor(Math.random() * colors.length)]
  
//     let header = document.querySelector('header > h1')
//     header.style.color = selectedColor
//   }
  
//   rainbowRandomizer()
  
//   // After a selected amount of time, it will run what is inside of the timeout
//   setTimeout(() => {
//     rainbowRandomizer()
//   }, 5000)
  
//   // Like timeout but will continue to run at every selected interval
//   setInterval(() => {
//     rainbowRandomizer()
//   }, 100)

function freelancerRandomizer() {
    let freelancers = [forum.indexOf.name]
    let selectedFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)]
    let loggedFreelancer = document.querySelector(selectedFreelancer)
    loggedFreelancer = selectedFreelancer
}
freelancerRandomizer()

setTimeout(() => {
    freelancerRandomizer()
}, 5000)

setInterval(() => {
    freelancerRandomizer()
}, 100)