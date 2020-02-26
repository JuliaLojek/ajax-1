const ul = document.querySelector("ul");
const loader = document.querySelector(".loader");
const button = document.querySelector("button");

function write (text) {
    const li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li)
}

// setTimeout( () => write("Druga linijka tekstu"), 1000 );
// setTimeout( () => write("Trzecia linijka tekstu"), 2000 );



// XMLHttpRequest:

// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

// request.onprogress = function(){
//     loader.classList.add('active');
// };

// request.onreadystatechange = function (aEvt) {
//     if( request.readyState === 4 ){
//         if( request.status === 200 ){
//             const todos = JSON.parse(request.responseText);
//             setTimeout( () => {
//                 todos.map( el => write(el.title) );
//                 loader.classList.remove('active');
//             }, 3000);
//         }else{
//             console.log("Błąd!");
//     }}
// }
// request.send(null);



// Fetch API:

function addClass() {
    loader.classList.add('active');
}

function displayResults () {
    addClass();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json())
    .then (data => {
        setTimeout(function(){
            loader.classList.remove('active');
            data.map((el => write(el.name)))},
        1500);
        }
    ).catch((error) => {
        loader.innerHTML = error;
      });
}
button.addEventListener('click', displayResults);
displayResults();

////////////////////////////

const input = document.getElementById("number");
const squareButton = document.getElementById("sendNumber");
const resultBox = document.getElementById("result");

function squareAsync (num) {
    return new Promise ( (resolve, reject) => {
        if( num > 0 ){
            resolve(num*num);
        } else {
            reject("the number has to be bigger than 0!");
        }
    } )
}

squareButton.addEventListener("click", () => {squareAsync(Number(input.value))
    .then( response => resultBox.innerText = response )
    .catch( error => resultBox.innerText = error )
} );

