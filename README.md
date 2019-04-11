# Project 2 - Space themed website with API's

This is a space-themed project that uses API's from NASA and Google, along with HTML, CSS and Javascript.

## Deployment

This project has already been deployed at https://jasonstreet.github.io/Project-2---Space-API/#top

In order to deploy this to Github pages I did the following:
1. Test local functionality for bugs
2. Commit all relevant files to GitHub
3. Enter settings in GitHub
4. Navigate to GitHub pages and click deploy

No other requirements are needed as this website is quite simple, so it can be easily deployed through GitHub.

You can also deploy it locally yourself by downloading this project, then open as a project in your chosen IDE. This project has been tested in Brackets and Notepad++ and should work in other IDE's. To install in Brackets, right-click the master folder, and select "Open as Brackets Project".

Due to Changes in Google policy to longer offer Google Maps API to developers completely free of charge, the map in this application has a watermark. This is due to the fact that I used a free developer version for this project, and this is not an error as a result of the code or the user.

## Testing

I have tested this project in Brackets and Notepad++ and in Internet Explorer, Vivaldi, Google Chrome and FireFox. All of these Browsers were able to handle the project without any difficulties or errors.

To test the NASA API's, I created a basic function that called data from NASA's API and printed it into the console, which I was able to view. The function I used:

```
    myRequest.onload = function () {
        
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            
            var myDataAPOD = JSON.parse(myRequest.responseText);
            console.log(myDataAPOD);
```

The data came in a JSON format, and I was able to test different parameters to get the data I needed. I have created separate functions to pull the Picture of the Day and the ISS Coordinates. This allowed me to test pulling the data for each API, rather than having to test them both at once.

To test the Google Maps API, I created a test function that held hard-coded data. When the function was run, the map displayed hard-coded coordinates. When I had the API and the Map module working with the hard-coded data, I was able to replace the values with the variables that held the ISS coordinates, so that when the function was run, it would pull through the variable instead of a hard-coded value.

I tested HTML, CSS and Responsiveness on different browsers, by resizing the window. I also run all the functions on the page with the re-sized window and it worked as normal, with the Map module taking up the screen when being viewed, and the space widget being centred in the middle of the screen and the background image loading as it should.

### Goals

When creating this application, there were a few goals that I wanted to achieve.

I wanted to create an easy to use application that was able to do something unique and interesting. I think I have achieved that by using the API's provided by Google and NASA. The API's let users see pictures take by space telescopes and see where the International Space Station is, relative to earth. I think that is an interesting concept, and it is easily accessible due to its speed and ease of use. The user interfaces sleek and separated so that each API is separated and easy to see. The application can be navigation on any size window. The contrast between the background and the foreground where the information is displayed means that the data given can be easily read.

The Web page and data are also quick to load, and the animations are smooth and don't suffer any lag or low FPS. The data from the API's loads quickly, and the loaded elements don't disrupt the responsiveness of the page. This means that any new elements that come in don't shove other elements out of place. 

Originally I didn't have the Google Maps API in place, however it was pointed out to me that users might want to have a bit more perspective, as the ISS API gave coordinates, but it was hard for users to know the exact location of the ISS without having to copy and paste the coordinates into Google Maps. With the addition of the Google maps API, this is now done automatically for the user if they request it, without loading any new windows or tabs and without any long loading times.

### Improvements

If I were to recreate this website in the future, with improved skills, I think I would take a look at improving the Javascript for the animations. Currently the individual elements have their own divs, which means they are static in their position. Using JQuery, the need for these divs could be elimnated, thus tidying up the code and making it more readable and lighter. Jquery might also allow the position of certain elements to be randomized. I think in the future I might also include more API's from NASA, as they have quite a few, so integrating more API's to create a more feature rich website could be a good idea.

Additionally I could implement some kind of error system if the API fails. The NASA API has been very reliable during production, however if , for whatever reason, they discontinue the API, or it fails on their end, having some kind of error message would be useful feedback to the user.

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
