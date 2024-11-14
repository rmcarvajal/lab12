const container = document.getElementById("container")

let contacts = []

function add() {

    const nameInput = document.getElementById("name")
    const nameValue = nameInput.value

    const numberInput = document.getElementById("number")
    const numberValue = numberInput.value

    const emailInput = document.getElementById("email")
    const emailValue = emailInput.value

    const addressInput = document.getElementById("address")
    const addressValue = addressInput.value

    if(nameValue === "" && numberValue === ""){
        alert("Please add name and number")
    }
    else if(nameValue === ""){
        alert("Please add name")
    }
    else if(numberValue === ""){
        alert("Please add number")
    }
    else{
        
    let contactinfo =[nameValue,numberValue,emailValue,addressValue]
    contacts.push(contactinfo)

        let json = JSON.stringify(contacts)
        localStorage.setItem("contactinfo", json)

        clear()
    }

}



function renderContacts(){
    let contactString = localStorage.getItem("contactinfo")
    let contactMap = JSON.parse(contactString)
    console.log(contactMap)
}

function clear(){
document.getElementById("name").value=""
document.getElementById("number").value=""
document.getElementById("email").value=""
document.getElementById("address").value=""
console.log(contacts)
}

function deleteUserInfo(){

}

function updateUserInfo() {
    const newNameInput = document.getElementById("edit-name").value;
    const newNameValue = newNameInput.value


    document.querySelectorAll('.edit-input').forEach(input => input.style.display = 'block');
    document.querySelectorAll('.edit-button').forEach(input => input.style.display = 'none');
    document.querySelectorAll('.save-button').forEach(input => input.style.display = 'block');
    if(newNameValue === ""){
        alert("Please add name")
    }
    else{
        return newNameValue
    }

}



function saveUserInfo(){
    var test = updateUserInfo()
    console.log(test)
}

renderContacts()