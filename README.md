# Project 2 - Space themed website with API's

This is a space themed project that uses API's from NASA and Google, along with HTML, CSS and Javascript.

## Getting Started

This project has already been deployed at https://jasonstreet.github.io/Project-2---Space-API/#top

You can also deploy it locally yourself by downloading this project, then opening as a project in your chosen IDE. This project has been tested in Brackets and Notepad++ and should work in other IDE's. To install in Brackets, right click the master folder, and select "Open as Brackets Project".

Due to Changes in Google policy to longer offer Google Maps API to developers completely free of charge, the map in this application has a watermark. This is due to the fact that I used a free developer version for this project, and this is not an error as a result of the code or the user.

## Testing

I have tested this project in Brackets and Notepad++ and in Internet Explorer, Vivaldi, Google Chrome and FireFox. All of these Browsers were able to handle the project without any difficulties or errors.

To test the NASA API's, I created a basic function that called data from NASA's API, and printed it into the console, which I was able to view. The function I used:

```
    myRequest.onload = function () {
        
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            
            var myDataAPOD = JSON.parse(myRequest.responseText);
            console.log(myDataAPOD);
```

The data came in a JSON format, and I was able to test different parameters to get the data I needed. I have created seperate functions to pull the Picture of the Day and the ISS Coordinates. This allowed me to test pulling the data for each API, rather than having to test them both at once.

To test the Google Maps API, I created a test function that held hard coded data in. When the function was run, the map displayed hard coded coordinates. When I had the API and the Map module working with the hard coded data, I was able to replace the values with the variables that held the ISS coordinates, so that when the function was run, it would pull through the variable instead of a hard oed value.

I tested HTML, CSS and Responiveness on different browsers, by resizing the window. I also run all the functions on the page with the re-sized window and it worked as normal, with the Map module taking up the screen when being viewed, and the space widget being centered in the middle of the screen and the background image loading as it should.

### Goals

When creating this application, there were a few goals that I wanted to achieve.

I wanted to create an easy to use application that was able to do something unique and interesting. I think I ahve achieved that by using the API's provided by Google and NASA. The API's let users see pictures take by space telescopes and see where the International Space Station is, relative to earth. I think that is an interesting concept, and it is easily accessibl due to it's speed and ease of use. The user itnerface sleek and seperated, so that each API is seperated and easy to see. The application can be navigation on any size window. The contrast between the background and the foreground where the information is displayed means that the data given can be easily read.

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Built With

* CSS3
* HTML5
* JavaScript


## Authors

* **Jason Street** - *For Code Institute*


## Acknowledgments

* NASA (For ISS Coordinates API and Picture of the Day API)
* Google (For images and maps API)
* CodePen (For animations and illustrations)
