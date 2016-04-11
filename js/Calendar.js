$(document).ready(function() {

    // page is now ready, initialize the calendar...
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        editable: true,
        height: 500,
        header:{
            left: '',
            center:'title',
            right:''
    },
        theme: true
        



    })
    $('#my-today-button').click(function() {
        $('#calendar').fullCalendar('today');
    });

});
