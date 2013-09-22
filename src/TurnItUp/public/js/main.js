$(document).ready(function () {
    centerPanel();
    resizeText();

});

function centerPanel() {
    var windowHeight = $(window).height();
    $('.anchor').each(function () {
        var anchorHeight = ((windowHeight - $(this).next('.panel').height()) / 2);
        $(this).height(anchorHeight);
        $(this).css('margin-top', -anchorHeight);
    });
}

$(window).resize(function () {
    centerPanel();
});

/**
 * Resize text in a step content to fit the original width
 */
function resizeText() {
    /* Get all the step content */
    $(".step-content").each(function () {

        originalWidth = $(this).width();

        /* Get children that exceed the width */
        $(this).children().each(function () {

            if (originalWidth < $(this).width()) {
                var ratio = (originalWidth - 10) / $(this).width();
                var originalFontSize = $(this).css("font-size");
                originalFontSize = originalFontSize.replace("px", "");
                $(this).css("font-size", Math.floor(originalFontSize * ratio) + "px");
            }
        });
    });
}
