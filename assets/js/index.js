$(document).ready(function() {
//display the current date and time at the top of the page
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentTime").text(currentTime);
//save user input from each text area to local storage
});

$(".btn").on("click", function(){
    alert("save")
});