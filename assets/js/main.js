//Setting the current date with moment
var currentDate = moment().format("MMM Do YY");
$("#currentDay").text(currentDate);

$(document).ready(function () {

        //This function will set the time correctly with moment
        function timeCheck() {
            var currentTime = moment().format("HH");

            $(".time-block").each(function () {
                var taskArea = parseInt((this).attr("id").split("hour-block")[i]);
                if (taskArea === currentTime) {
                    $(this).addClass("present");
                    $(this).removeClass("future");
                    $(this).removeClass("past");
                }
                else if (taskArea < currentTime) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                }
                else {
                    $(this).addClass("future");
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                }
            })
        }

        $(".saveBtn").on("click", function () {
            var storedText = $(this).siblings
        });


})