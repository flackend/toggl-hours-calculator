;(function (window, document, $, undefined) {

    "use strict";

    var totalHours = 0;
    $(".entry input:checked").each(function () {

        // Get Duration
        var durationStr;
        switch(window.location.pathname) {
            case '/app/timer':
                durationStr = $(this).parent().parent().parent().find(".duration").text();
                break;
        }
        var duration = durationStr.split(":");
        // Parse duration
        var hours = 0;
        if (duration[duration.length - 3] !== undefined) {
            hours = parseInt(duration[duration.length - 3], 10);
        }
        var minutes = parseInt(duration[duration.length - 2], 10);
        var seconds = parseInt(duration[duration.length - 1], 10);
        // Calculate hours
        totalHours += (seconds / 60 + minutes) / 60 + hours;
    });
    // Round hours (2.68781 becomes 2.69)
    totalHours = Math.round(totalHours * 100) / 100;
    // Display value (using a prompt so that the user can easily copy the
    // value to their clipboard)
    var foo = prompt("Total hours of checked items:", totalHours);

})(this, this.document, jQuery);