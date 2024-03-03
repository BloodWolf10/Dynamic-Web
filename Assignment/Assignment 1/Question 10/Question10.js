$(document).ready(function() {
    // Add mouseover event handler for paragraphs
    $('p').mouseover(function() {
        // Change the color to red on mouseover
        $(this).css('color', 'red');
    });

    // Add mouseout event handler for paragraphs (optional)
    $('p').mouseout(function() {
        // Change the color back to the default on mouseout
        $(this).css('color', 'black');
    });
});
