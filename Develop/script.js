var savebtn = $(".saveBtn");
var description = $(".description");

renderEvents();
console.log(localStorage);

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