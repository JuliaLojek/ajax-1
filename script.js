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



// Feych API:

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then( response => response.json() )
//     .then( response => response.map( el => write(el.title) ) );

function displayTodos() {
    return new Promise( () => {
        setTimeout(() => {
            loader.classList.remove("active");
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then( response => response.json() )
            .then( response => response.map( el => write(el.title) ) );;
        }, 1500);
    });
}
    
async function asyncLoad() {
loader.classList.add("active");
await displayTodos();
}

asyncLoad();