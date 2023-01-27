'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const getBtn = document.querySelector('.get-btn');
    const postBtn = document.querySelector('.post-btn');
    
    getBtn.addEventListener('click', getData);
    postBtn.addEventListener('click', postData);
    
    function getData() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => { return response.json() })
            .then(data => {
                typeof(data);
            })
    };
    
    function postData() {};
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json.title));

});
