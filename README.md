# Fetch and Display Photos

One-page application that incorporates the functionality of a RESTful API. The primary goal was to retrieve data from a JSON file through the API and seamlessly integrate it into the structure of a webpage. This involved establishing a robust connection between the application and the API, ensuring the secure and efficient retrieval of the desired data. The retrieved JSON data was then processed and transformed into a suitable format for presentation on the webpage. The layout and design of the webpage were carefully considered to provide an aesthetically pleasing and user-friendly interface that effectively showcases the fetched data. The development process encompassed various stages, including establishing the necessary API integration, implementing appropriate data retrieval mechanisms, designing and structuring the webpage layout, and finally, incorporating the retrieved data into the webpage to deliver a cohesive and engaging user experience.

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
