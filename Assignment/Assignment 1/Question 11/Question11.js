$(document).ready(function() {
    // Add mouseenter event handler for paragraphs
    $('p').mouseenter(function() {
        // Change the font weight and color on mouseenter
        $(this).css({
            'font-weight': 'bold',
            'color': 'blue'
        });
    });

    // Add mouseleave event handler for paragraphs
    $('p').mouseleave(function() {
        // Change the font weight and color back to default on mouseleave
        $(this).css({
            'font-weight': 'normal',
            'color': 'black'
        });
    });
});
