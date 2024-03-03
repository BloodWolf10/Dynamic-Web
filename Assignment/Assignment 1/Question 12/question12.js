document.getElementById("removeButton").addEventListener("click", function() {
    // Get the paragraph element by its id
    var paragraphToRemove = document.getElementById("demo");

    // Check if the paragraph element exists before attempting to remove it
    if (paragraphToRemove) {
        // Remove the paragraph from the DOM
        paragraphToRemove.remove();
    } else {
       
    }
});
