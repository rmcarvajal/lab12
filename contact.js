class Contact{
    constructor(nameValue,numberValue,emailValue,addressValue) {
        this.nameValue = nameValue
        this.numberValue = numberValue
        this.emailValue = emailValue
        this.addressValue = addressValue
    }
    contHtml() {
        return `
    <div class="cont">
    <h1>${nameValue}</h1>
    <input type="text" id="edit-name" placeholder="Edit name" class="edit-input" style="display: none;">
    <h2>${numberValue}</h2>
    <h2>${emailValue}</h2>
    <h2>${addressValue}</h2>
    <button onclick="updateUserInfo()" class="edit-button">Edit info</button>
    <button onclick="saveUserInfo()" class="save-button" style="display: none;">Save info</button>
    <button onclick="deleteUserInfo()" class="delete-button">Delete</button>
    </div>
        `
    }
}