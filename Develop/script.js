var savebtn = $(".saveBtn");
var description = $(".description");
var rows = $(".row");

var currentHour = parseInt(moment().format("H"));

// console.log(currentHour);

renderEvents();
colorChange();
// console.log(localStorage);






//MOMENTS 
    //got this from a stackOverflow
function colorChange(){
    Array.from(rows).forEach(row => {
        let
            rowIdString = row.id,
            rowHour;
        if (rowIdString) {
            rowHour = parseInt(rowIdString);
        }
        if(rowHour){
            if(currentHour === rowHour){
                setColor(row, "red");
            }else if ((currentHour < rowHour) && (currentHour > rowHour -6)){
                setColor(row, "green");
            }else if ((currentHour > rowHour) && (currentHour < rowHour +6)){
                setColor(row, "lightgrey");
            }else{
                setColor(row, "white");
            }
        }
    })
}
    //trying to make my own version of above w/jquery
    // NOTE ** it goes through but makes everything past for some reason.
    // function colorChange2(){
    //     Array.from(rows).forEach(row => {
    //         let
    //             rowIdString = row.id,
    //             rowHour;
    //         if (rowIdString) {
    //             rowHour = parseInt(rowIdString);
    //         }
    //         if(rowHour){
    //             if(currentHour === rowHour){
    //                 rows.addClass("present");
    //                 rows.removeClass("future");
    //                 rows.removeClass("past");
    //                 rows.removeClass("hour");
    //             }else if ((currentHour < rowHour) && (currentHour > rowHour -6)){
    //                 rows.addClass("future");
    //                 rows.removeClass("present");
    //                 rows.removeClass("past");
    //                 rows.removeClass("hour");
    //             }else if ((currentHour > rowHour) && (currentHour < rowHour +6)){
    //                 rows.addClass("past");
    //                 rows.removeClass("future");
    //                 rows.removeClass("present");
    //                 rows.removeClass("hour");
    //             }else{
    //                 rows.addClass("hour");
    //                 rows.removeClass("future");
    //                 rows.removeClass("past");
    //                 rows.removeClass("present");
    //             }
    //         }
    //     })
    // }

function setColor(element, color) {
    element.style.backgroundColor = color;
}

//LOCAL STORAGE FUNCTIONS

savebtn.on("click", function(event) {
    event.preventDefault()
    for(let i = 1; i< 11; i++){

        

        var saved = $(".block"+i).val();

        console.log(saved);

        localStorage.setItem("events"+i, saved);

    }
});



function renderEvents(){
    for(let i = 1; i < 11; i++){
        var events = localStorage.getItem("events"+i);
        
        $(".block"+i).val(events);
    }
    console.log(events);
};