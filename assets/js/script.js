// Variables

var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);

$("#nineRow").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#tenRow").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#elevenRow").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#twelveRow").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#oneRow").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#twoRow").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#threeRow").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#fourRow").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#fiveRow").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));