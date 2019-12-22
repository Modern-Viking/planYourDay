 //display the current date and time in the header
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentTime").text(currentTime);

let plannerEl = $('#plannerEl');

var currentHour = parseInt(moment().format("H"));

var times = [
    {time: "9 AM", value: '9'},
    {time: "10 AM", value: '10'},
    {time: "11 AM", value: '11'},
    {time: "12 PM", value: '12'},
    {time: "1 PM", value: '13'},
    {time: "2 PM", value: '14'},
    {time: "3 PM", value: '15'},
    {time: "4 PM", value: '16'},
    {time: "5 PM", value: "17"},
];

for (var i=0; i<times.length; i++) {
    savedText = localStorage.getItem(i) || ""
    plannerEl.append(`<div class="row">
    <div class="col-sm-1 hour">${times[i].time}</div>
    <textarea class="col-sm-10 input" id="${i}" data-value="${times[i].value}">${savedText}</textarea>
    <div class="col-sm-1 justify-content-center btn"><i class ="far fa-save fa-2x"></i></div>
    </div></div>`);
};

$('.btn').click(function() {
    var userInput = $(this).parent().find("textarea").val();
    var hour = $(this).parent().find("textarea").attr("id");
    localStorage.setItem(hour, userInput);
});

function colorCode() {
    currentHour = parseInt(moment().format("H"));
    var input = $(".input")
    var currentTask = $(input[i]);
    for (var j = 0; j < input.length; j++) {
        if (currentTask.attr('data-value') < currentHour) {
            currentTask.addClass('past');
        } else if (currentTask.attr('data-value') > currentHour){ 
            currentTask.addClass('future');
        } else { currentTask.addClass('present') }
    };
    console.log(input);
    console.log($(times[i]))
    console.log(input.attr("data-value"))
};
console.log(currentHour);
colorCode();