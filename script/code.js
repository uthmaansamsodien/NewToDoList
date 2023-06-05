const add = document.querySelector("#Add")
const sort = document.querySelector("#Sort") 
const inputName = document.querySelector("#inputName")
let list = document.getElementById('list')

let array = []

function addItem() {
    array.push(inputName.value);

    list.innerHTML = "";
    array.forEach((item) => {
        list.innerHTML += `
        <div id="checkbox"><input type="checkbox">`+item+`<button id="xButton">&times</button></div>
        `
    })
}

