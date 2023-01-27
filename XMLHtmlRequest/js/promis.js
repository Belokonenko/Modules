'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const getBtn = document.querySelector('.get-btn');
    const postBtn = document.querySelector('.post-btn');

    function sendXmlReq(method, url, data) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);
            
            if (data) {
                xhr.setRequestHeader('Content-Type', 'aplication/json')
            }
            
            xhr.responseType = 'json';
            
            xhr.onload = () => {
                if (xhr.status >= 400) {
                    console.log(xhr.status);
                    reject(xhr.response)
                } else {
                    resolve(xhr.response);
                }
            }
            
            xhr.onerror = () => {
                reject('Something went wrong');
            }
            
            xhr.send(JSON.stringify(data));
        })
    }

    getBtn.addEventListener('click', (e) => {
        e.preventDefault();

        sendXmlReq('GET', 'https://jsonplaceholder.typicode.com/todos/1')
            .then(respnseData => console.log(respnseData)) 
    })

    postBtn.addEventListener('click', (e) => {
        e.preventDefault();

        sendXmlReq('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
            .then(respnseData => console.log(respnseData))
            .catch(error => console.log(error))
    })
});
