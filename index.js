const container = document.getElementById("container")



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
        console.log(nameValue)
        console.log(numberValue)
        console.log(emailValue)
        console.log(addressValue)

        container.innerHTML +=`
            <div class="cont">
            <h1>${nameValue}</h1>
            <h2>${numberValue}</h2>
            <h2>${emailValue}</h2>
            <h2>${addressValue}</h2>
            </div>
        `
        clear()
    }

}

function clear(){
document.getElementById("name").value=""
document.getElementById("number").value=""
document.getElementById("email").value=""
document.getElementById("address").value=""

}

// Función para actualizar los datos del usuario
function updateUserInfo() {
    const newName = document.getElementById("edit-name").value;

    if (newName) userData.name = newName;

    // Ocultar los campos de edición después de la actualización
    document.querySelectorAll('.edit-input').forEach(input => input.style.display = 'none');
}

function toggleSection(section) {
    const sectionContent = document.querySelector(`.${section}`);
    if (section === 'settings') {
        document.querySelectorAll('.edit-input').forEach(input => {
            input.style.display = input.style.display === 'none' ? 'block' : 'none';
        });
    } else {
        if (sectionContent.style.display === "none" || !sectionContent.style.display) {
            sectionContent.style.display = "block";
        } else {
            sectionContent.style.display = "none";
        }
    }
}