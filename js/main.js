/* document.getElementById("my-input").addEventListener("keyup", () => {
    
    console.log("escribiendo...")

    let inputValue = document.getElementById("my-input").value
    console.log(inputValue)
}) */

//<!--//ejemplo 2 listener-->
document.getElementById("my-input").addEventListener("keyup", (event) => {
    
    console.log( event )
    console.log( event.target )
    let value = event.target.value

    console.log(value)

    document.getElementById("my-heading").innerText = value

})


let buttons = document.querySelectorAll(".test-btn")
console.log(buttons)

buttons.forEach( button => {
    console.log(button)

    button.addEventListener( "click", event => {
        console.log(event.target.innerText )
        console.log(event.target.dataset)

        let customKey = event.target.dataset.customKey
        console.log(customKey)
    })
})

let koderList = []

const getKoderName = () => {

    let koderList = document.getElementById("koder-list")
    let nameInput = document.getElementById("koder-name")


    let koderName = nameInput.value
//  console.log(koderName)

    koderList.push(koderName)

    while (koderList.lastElementChild){
        koderList.removeChild(koderList.lastElementChild)
    }

console.log( koderList )

printkodersList()

document.getElementById("koder-name").value = ""

}

//button

document.getElementById("save-koder").addEventListener("click", getKoderName)

const printkodersList = () => {
    koderList.forEach( koder => {
        let listItem = document.createElement("li")
        let itemText = document.createTextNode(koder)
        listItem.appendChild(itemText)

        listItem.classList.add("list-group-item")

        document.getElementById("koder-list").appendChild(listItem)

    })
}

/* 

opciones a ocupar para setear

const myNode = document.getElementById("foo");
while (myNode.lastElementChild){
    myNode.removeChild(myNode.lastElementChild)
} */

/* opcion para cetear pero con inconvenientes ceveros

myNode.innertHTML = ""
 */



//<!--//ejemplo con boton listener-->
/* document.getElementById("button-1").addEventListener( "click" , ( event ) => {
    console.log( event.target.innerText )
})

document.getElementById("button-2").addEventListener( "click" , ( event ) => {
    console.log( event.target.innerText )
}) */
