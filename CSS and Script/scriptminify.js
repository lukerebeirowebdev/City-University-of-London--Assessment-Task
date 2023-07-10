const perPage = 4; let currentPage = 1; const photosContainer = document.getElementById("photos"), prevBtn = document.getElementById("prevBtn"), nextBtn = document.getElementById("nextBtn"); function fetchData(t) { let e = `https://jsonplaceholder.typicode.com/photos?_page=${t}&_limit=4`; fetch(e).then(t => t.json()).then(t => displayData(t)).catch(t => console.log(t)) } function displayData(t) {
    let e = ""; t.forEach(t => {
        e += `<div>
                   <img src="${t.url}" alt="${t.title}">
                 </div>`}), photosContainer.innerHTML = e
} prevBtn.addEventListener("click", () => { fetchData(--currentPage), nextBtn.disabled = !1, 1 === currentPage && (prevBtn.disabled = !0) }), nextBtn.addEventListener("click", () => { fetchData(++currentPage), prevBtn.disabled = !1 }), fetchData(currentPage);