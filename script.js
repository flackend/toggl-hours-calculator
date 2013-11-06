var totalMinutes = 0;
$('.task input:checked').each(function() {

    var text = $(this).parent().find('.duration').text();
    var arr = text.split(':');
    var minutes = parseInt(arr[arr.length - 2]);
    var seconds = parseInt(arr[arr.length - 1]);

    totalMinutes += (seconds / 60) + minutes;
});

var totalHours = Math.round(totalMinutes / 60 * 100) / 100;
alert('Total hours of checked items: '+ totalHours);
