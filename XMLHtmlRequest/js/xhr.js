'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const getBtn = document.querySelector('.get-btn');
    const postBtn = document.querySelector('.post-btn');

    function sentHttpRequest(method, url) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {// переназначить метод (выполнится после получения ответа)
            const data = xhr.response;
            console.log(data);
        };

        xhr.send();
    };

    getBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sentHttpRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')    
    });

    postBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('post');
        const obj = {};
        const xht = new XMLHttpRequest();
        
        xht.open('POST', 'https://jsonplaceholder.typicode.com/posts');
        xht.setRequestHeader('Content-Type', 'application/json');
        xht.responseType = 'json';
        xht.onload = () => {
            console.log(xht.response);
            console.log(xht.response.title);
        }
        
        const data = {    
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        
        xht.send(JSON.stringify(data));
    })

});


