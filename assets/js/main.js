//Setting the current date with moment
var currentDate = moment().format("MMM Do YY");
$("#currentDay").text(currentDate);

function buttonSave() {
    $(".saveBtn").on("click", function () {
        var storedText = $(this).siblings(".user-data").val();
        var storedTime = $(this).parent().attr("id");

        localStorage.setItem(storedTime, storedText);
    });
}


//This function will set the time correctly with moment
function timeCheck() {
    var currentTime = moment().format("HH mm ss");
    // console.log(currentTime);

    //Possible loop for setting classes based on time currently not working
    $(".time-block").each(function () {
        var taskArea = parseInt($(this).attr("id").split("hour-block")[1]);
        if (taskArea < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (taskArea === currentTime) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
};



//How to get tasks from local storage
$("#9-AM .user-data").val(localStorage.getItem("9-AM"));
$("#10-AM .user-data").val(localStorage.getItem("10-AM"));
$("#11-AM .user-data").val(localStorage.getItem("11-AM"));
$("#12-PM .user-data").val(localStorage.getItem("12-PM"));
$("#1-PM .user-data").val(localStorage.getItem("1-PM"));
$("#2-PM .user-data").val(localStorage.getItem("2-PM"));
$("#3-PM .user-data").val(localStorage.getItem("3-PM"));
$("#4-PM .user-data").val(localStorage.getItem("4-PM"));
$("#5-PM .user-data").val(localStorage.getItem("5-PM"));

//Initial page function
function init() {
    timeCheck();
    buttonSave();
}

$(document).ready(init());



        //         for (var i=0; i< userTextArea.length; i++) {
        //             if (userTextArea[i].getAttribute("value") > "hour-block"){
        //                 userTextArea[i].addclass("future");

        //             }else if (userTextArea[i].getAttribute("value") < "hour-block") {
        //                 userTextArea[i].addclass("past");

        //             }else {
        //                 userTextArea[i].addclass("present");
        //             }
        //         }
        //     });
        // }













