//  Original Code which pulls RESTFULAPI
// fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(photo => {
//             const img = document.createElement('img');
//             img.src = photo.thumbnailUrl;
//             img.alt = photo.title;
//             img.title = photo.title;
//             img.classList.add('photo');
//             img.addEventListener('click', () => {
//                 window.location.href = photo.url;
//             });
//             const container = document.getElementById('photos-container');
//             container.appendChild(img);
//             console.log(img);
//             console.log(container);
//         });
//     })
//     .catch(error => {
//         console.log('Error:', error);
//         console.log(error);
//     });

// Pagination
const perPage = 3;
let currentPage = 1;
const photosContainer = document.getElementById('photos');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function fetchData(page) {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${perPage}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log(error));
}

function displayData(data) {
    let html = '';
    data.forEach(photo => {
        html += `<div>
                   <img src="${photo.url}" alt="${photo.title}">
                 </div>`;
    });
    photosContainer.innerHTML = html;
}

prevBtn.addEventListener('click', () => {
    currentPage--;
    fetchData(currentPage);
    nextBtn.disabled = false;
    if (currentPage === 1) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', () => {
    currentPage++;
    fetchData(currentPage);
    prevBtn.disabled = false;
});

fetchData(currentPage);
