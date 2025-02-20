// load page
    document.addEventListener("DOMContentLoaded", function() {

// Select the button id from html and add a click event listener to enable click
    document.getElementById("generateStory").addEventListener("click", generateStory);
});

  // Function to generate a random story
function generateStory() {

    // array of different selection of words
    let subjects = ["A cat", "A dog", "A bird", "A fish", "A monkey"];
    let actions = ["jumps over", "runs past", "flys to", "swims near", "climbs on"];
    let objects = ["a tree", "a car", "a house", "a rock", "a fence"];
    
    // selecting random elements from each array given above
    let randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    let randomAction = actions[Math.floor(Math.random() * actions.length)];
    let randomObject = objects[Math.floor(Math.random() * objects.length)];
    
    // Put together the stories of each array to create a sentence
    let story = [randomSubject, randomAction, randomObject].join(" ") + ".";

    // Displays the array story 
    document.getElementById("story").textContent = story;
};