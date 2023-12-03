// 1. Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - alert). Jei sveikas, po apačia sukurk h1 elementą kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

let inputName = document.getElementById("inputName").value
let inputNumber = document.getElementById("inputNumber").value

const submit = document.getElementById("submit")
let heading = document.getElementById("heading")
inputNumber = Number
let headingNumber = inputNumber

submit.addEventListener("click", function(){
    let inputName = document.getElementById("inputName").value

    let inputNumber = document.getElementById("inputNumber").value

        if(isNaN(Number(inputNumber))){
            alert("Įvestas ne Skaičius")

        } else {
            let container = document.getElementById("container")
            container.innerHTML = ''

            }
            for (let i = 0; i < inputNumber; i++){
                let heading = document.createElement("h1")
                heading.innerHTML = inputName
                container.appendChild(heading)
            }
            console.log(headingNumber)
            console.log(inputName)
            console.log(inputNumber)
    })




// 2. Sukurk input, kur vartotojas įves savo vardą. Įvedus - alert'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.

// let inputName = document.getElementById("inputName")
// let inputNumber = document.getElementById("inputNumber").value
// const submit = document.getElementById("submit")

// submit.addEventListener("click", function(){
//     window.alert('Vartotojo vardas: ' + inputName.value.trim().length + ' raidžių.')
//     console.log(inputName.value.trim().length)
// })

// 3. Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.


// let inputName = document.getElementById("inputName").value
// let container = document.getElementById("container")
// const submit = document.getElementById("submit")
// let heading = document.getElementById("heading")

// const myArray = inputName.split(' ')
// let personName = myArray[0]
// let personSurname = myArray[1]
// let personSurnameTwo = myArray[2]

// submit.addEventListener("click", function(){
//     let inputName = document.getElementById("inputName").value
//     const myArray = inputName.split(" ")
    
//     let container = document.getElementById("container")
//     let heading = document.createElement("h1")
    
//     console.log(myArray[0])
//     console.log(myArray[1])
//     console.log(myArray[2])
    
//     container.innerHTML = ''

//     heading.innerHTML = (myArray[0] + " " + myArray[1] + " " + myArray[2])
//     container.appendChild(heading)
// })
