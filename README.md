# Feed Reader Project

This project is an application that reads RSS feeds. It uses [Jasmine](https://jasmine.github.io/).

## How to run

You can clone or download this repository and run the "index.html" file or you can follow this link https://nadiaessou.github.io/Udacity_feedreader/

## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## How I have completed this project

1.RSS Feeds  
Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.  
Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

2.The Menu  
Write a new test suite named `"The menu"`.  
Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.  
Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

3.Initial Entries  
Write a test suite named `"Initial Entries"`.  
Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

4.New Feed Selection  
Write a test suite named `"New Feed Selection"`.  
Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.


## Resources used for this project

the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)  
the JavaScript Testing [course](https://www.udacity.com/course/ud549)  
[Jasmine documentation](http://jasmine.github.io).  
the Udacity Forum (https://discussions.udacity.com/search?q=feedreader%20project)  
