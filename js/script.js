/*-------------Завдання №1-------------*/
// function getData (url){
//     const result = [];
//     fetch(url)
//     .then(response => response.json())
//     .then((json) => {
//         for(let i = 0; i < json.length; i++) {
//             if(json[i].title[0] === 'a'){
//                 result.push(json[i])
//             }
//         }
//         console.log(result)
//     })
// }

// getData('https://jsonplaceholder.typicode.com/todos');

/*-------------Завдання №2-------------*/
// async function getData (url){
//     try{
//         const result = [];
//         await fetch(url)
//         .then(response => response.json())
//         .then((json) => {
//             for(let i = 0; i < json.length; i++) {
//                 if(json[i].title[0] === 'a'){
//                     result.push(json[i])
//                 }
//             }
//             console.log(result)
//         })
//     }catch(error){
//         console.log(error.message)
//     }
// }

// getData('https://jsonplaceholder.typicode.com/todos');

/*-------------Завдання №3-------------*/
// function getData (url){
//     const result = [];
//     const resultAB = [];
//     fetch(url)
//     .then(response => response.json())
//     .then((json) => {
//         let divA = document.querySelector('.user-a');
//         let divAB = document.querySelector('.user-ab');
//         let p = document.createElement('p');
//         let pAb = document.createElement('p');
//         for(let i = 0; i < json.length; i++) {
//             if(json[i].title[0] === 'a'){
//                 result.push(json[i])
//                 p.innerHTML += `<p>${JSON.stringify(json[i])}</p>`
//                 divA.prepend(p);
//             } 
//         }
//         for(let i = 0; i < json.length; i++){
//             if(json[i].title[0] === 'a' && json[i].title[1] === 'b')
//                 resultAB.push(json[i])
//                 pAb.innerHTML = JSON.stringify(resultAB);
//                 divAB.prepend(pAb);
//         }
//     })
// }

// getData('https://jsonplaceholder.typicode.com/todos');

/*-------------Завдання №4-------------*/
let btn1 = document.querySelector('.add-a');
let btn2 = document.querySelector('.add-ab');
let btn3 = document.querySelector('.add-all');
let divA = document.querySelector('.user-a');
let pA = document.createElement('p');
let divAB = document.querySelector('.user-ab');
let pAB = document.createElement('p');

btn1.addEventListener('click', function(event){
    const result = [];
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++) {
            if(json[i].title[0] === 'a'){
                result.push(json[i])
                pA.innerHTML += `<p>${JSON.stringify(json[i])}</p>`
                divA.prepend(pA);
            } 
        }
    })
    pAB.innerHTML = '';
})

btn2.addEventListener('click', function(event){
    const result = [];
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++) {
            if(json[i].title[0] === 'a' && json[i].title[1] === 'b'){
                result.push(json[i])
                pAB.innerHTML = JSON.stringify(result);
                divAB.prepend(pAB);
            } 
        }
    })
    pA.innerHTML = '';
})


btn3.addEventListener('click', function(event){
    const result = [];
    const resultAB = [];
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((json) => {
        for(let i = 0; i < json.length; i++) {
            if(json[i].title[0] === 'a'){
                result.push(json[i])
                pA.innerHTML += `<p>${JSON.stringify(json[i])}</p>`
                divA.prepend(pA);
            } 
        }
        for(let i = 0; i < json.length; i++){
            if(json[i].title[0] === 'a' && json[i].title[1] === 'b')
                resultAB.push(json[i])
                pAB.innerHTML = JSON.stringify(resultAB);
                divAB.prepend(pAB);
        }
    })
})