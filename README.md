# Project 2 - Space themed website with API's

This is a space themed project that uses API's from NASA and Google, along with HTML, CSS and Javascript.

## Getting Started

This project has already been deployed at https://jasonstreet.github.io/Project-2---Space-API/#top

You can also deploy it locally yourself by downloading this project, then opening as a project in your chosen IDE. This project has been tested in Brackets and Notepad++ and should work in other IDE's. To install in Brackets, right click the master folder, and select "Open as Brackets Project".

## Testing

I have tested this project in Brackets and Notepad++ and in Internet Explorer, Vivaldi, Google Chrome and FireFox. All of these Browsers were able to handle the project without any difficulties or errors.

To test the NASA API's, I created a basic function that called data from NASA's API, and printed it into the console, which I was able to view. The data came in a JSON format, and I was able to test different parameters to get the data I needed. I have created seperate functions to pull the Picture of the Day and the ISS Coordinates. This allowed me to test pulling the data for each API, rather than having to test them both at once.

To test the Google Maps API, I created a test function that held hard coded data in. When the function was run, the map displayed hard coded coordinates. When I had the API and the Map module working with the hard coded data, I was able to replace the values with the variables that held the ISS coordinates, so that when the function was run, it would pull through the variable instead of a hard oed value.

I tested HTML, CSS and Responiveness on different browsers, by resizing the window. I also run all the functions on the page with the re-sized window and it worked as normal, with the Map module taking up the screen when being viewed, and the space widget being centered in the middle of the screen and the background image loading as it should.
### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
