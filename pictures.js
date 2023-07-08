fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.alt = photo.title;
            img.title = photo.title;
            img.classList.add('photo');
            img.addEventListener('click', () => {
                window.location.href = photo.url;
            });
            const container = document.getElementById('photos-container');
            container.appendChild(img);
            console.log(img);
            console.log(container);
        });
    })
    .catch(error => {
        console.log('Error:', error);
        console.log(error);
    });