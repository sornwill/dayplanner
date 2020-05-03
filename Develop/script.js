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

    function colorChange2(){

    }

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