fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;

            const container = document.getElementById('photos-container');
            container.appendChild(img);
        });
    })
    .catch(error => {
        console.log('Error:', error);
    });