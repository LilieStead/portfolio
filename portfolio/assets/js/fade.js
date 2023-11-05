// Creates function to reveal content on a page when a user scrolls
function reveal() {
    // Defines the reveals variable and selects the class "fade-in"
    var reveals = document.querySelectorAll(".fade");
    // For loop that finds the length of the reveals variable
    for (var i = 0; i < reveals.length; i++) {
        // Defines the window height by finding the height of the window in pixels
        var windowHeight = window.innerHeight;
        // Returns a DOMRect object with information on the size of the element and position
        var elementTop = reveals[i].getBoundingClientRect().top;
        // Defines the visible element and sets it to 150
        var elementVisible = 150;
        // If statement determines if the element is visible
        if (elementTop < windowHeight - elementVisible) {
            // If element is visible then add the "appear" class to the element
            reveals[i].classList.add("appear");
            // Else statement determines if the element is not visible
        } else{
            // Removes the "appear" class from elements that are not visible
            reveals[i].classList.remove("appear");
        }
    }
    
}
// When the program detects a user scroll, the reveal function 
window.addEventListener("scroll", reveal);