const input = document.getElementById("address");
const button = document.getElementById("sendImage");
const imageBox = document.getElementById("imageBox");

function displayImg (url) {
    return new Promise ( (resolve, reject) => {
        const image = document.createElement("img");
        image.src = url;
        resolve(image);
        reject("I couldn't find any picture");
    })
}

button.addEventListener("click", () => {
    displayImg(input.value)
        .then( image => imageBox.appendChild(image) )
        .catch( error => alert(error) )
});