# Fetch and Display Photos

## Javascript Functions

The `fetch()` function is used to make a network request to the specified URL https://jsonplaceholder.typicode.com/photos. This URL is an example endpoint that returns a JSON array of photos.

The `fetch()` function returns a Promise that resolves to the response from the server. We can then chain `.then()` methods to handle the response.

The first `.then()` method takes the response object and calls its `.json()` method to parse the response body as JSON. This returns another Promise that resolves to the parsed JSON data.

The second `.then()` method takes the parsed JSON data and performs some actions with it. In this case, it iterates over each photo object in the data using the `orEach()` method.

Inside the `forEach()` loop, it creates an img element using the `document.createElement()` method. This element represents an image.

It sets the src attribute of the img element to `photo.thumbnailUrl`. This assumes that each photo object in the data has a property called `thumbnailUrl` that contains the URL of the photo thumbnail.

It retrieves the container element with the ID photos-container using the `getElementById()` method.

It appends the img element to the container element using the `appendChild()` method. This adds the image to the container, effectively displaying it on the webpage.

If any error occurs during the fetching or processing of the data, the code uses the `.catch()` method to handle the error. In this case, it simply logs the error message to the console.

Overall, this code fetches a list of photos from a JSON API, creates image elements for each photo, and appends them to a container on the webpage.

# Pagination Function

The const perPage = 4; sets the number of photos to be displayed per page.The let currentPage = 1; initializes the current page number to 1.

The const photosContainer = document.getElementById('photos'); gets a reference to the HTML element with the ID 'photos', which will be used to display the photos.

The const prevBtn = document.getElementById('prevBtn'); and const nextBtn = document.getElementById('nextBtn'); get references to the HTML elements with the IDs 'prevBtn' and 'nextBtn', respectively. These elements are used as buttons for navigating to the previous and next pages.

The fetchData(page) function is defined to fetch data from the JSON API based on the specified page number. It constructs a URL with the page parameter and the perPage constant as query parameters. It then uses the fetch function to make an HTTP GET request to the API.

Once the response is received, the code converts it to JSON using the response.json() method. The resulting JSON data is then passed to the displayData(data) function.

The displayData(data) function takes the JSON data as a parameter and generates HTML markup for each photo. It iterates over the data array using the forEach method and creates a element for each photo with an <img> tag inside it. The src attribute of the <img> tag is set to the photo.url value, and the alt attribute is set to the photo.title value. The generated HTML markup is stored in the html variable.

Finally, the photosContainer.innerHTML property is set to the generated HTML markup, which replaces the content of the photosContainer element with the photos.

Event listeners are added to the previous and next buttons using the addEventListener method. When the previous button is clicked, the currentPage is decremented, and the fetchData(currentPage) function is called to fetch and display the data for the new page. The nextBtn.disabled property is set to false to enable the next button, and if the currentPage becomes 1, the prevBtn.disabled property is set to true to disable the previous button.

When the next button is clicked, the currentPage is incremented, and the fetchData(currentPage) function is called to fetch and display the data for the new page. The prevBtn.disabled property is set to false to enable the previous button.

Finally, the fetchData(currentPage) function is called initially to fetch and display the data for the first page.
