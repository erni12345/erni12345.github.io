

//Tracking Code to track : amount of mouse clicks, time spent, total key presses, total number of char typed

//initialise dictionary with vals
const data = {"mouse_clicks" : 0, "time_spent" : "", "total_key" : 0, "total_char" : 0};

//time variable needed to check how long the user has been on the page
const d = new Date();
let oldTime;

//on load we update the "oldtime" aka the time that they arrived on the page. This way we can get more time related data in the future
window.onload = function()
{
    oldTime = d.getTime();
    console.log(oldTime);
}
// on click anywhere on the window we add one to the amount of clicks
window.onclick = function()
{
    data["mouse_clicks"] += 1;
    console.log(data["mouse_clicks"] + " mouse clicks");
}

//addKeyDownForField adds one to the amount of key downs in fields. This is triggered when
//a key is pressed while being in a signup field.
function addKeyDownForField() 
{
    data["total_key"] += 1;
    console.log(data["total_key"] + "   total ket down");
}

//totalChar calculates the amount of char in all the input fields. It loops over all the input, checks the type and sums the lengths.
function totalChar()
{
    let fields = document.querySelectorAll("input");
    let amountOfChar = 0;
    fields.forEach((element)=>{
        if(element.type === "text")
        {
            let inputTyped = element.value;
            amountOfChar += inputTyped.length;
        }
    })
    amountOfChar += document.getElementById("w3review").value.length;
    data["total_char"] = amountOfChar;
    console.log(data["total_char"] + " TOTAL CHAR")
}

//renderStats renders and creates the new elements on the page, with the user stats
function renderStats()
{
    var div = document.getElementById("hiddenDiv");
    div.style.display = "block";
    document.getElementById("text").innerHTML = "Number of mouse clicks: " + data["mouse_clicks"] + "<br/>" + "Total time spent: " +  data["time_spent"] + "<br/>" + "Total key presses: " + data["total_key"] + "<br/>" + "Total number of characters typed: " + data["total_char"];
    

}

//makeTime() calculates the amount of time spent on the page (current time - arrival time) and formats it into minutes and seconds
function makeTime()
{
    let d2 = new Date();
    let newTime = d2.getTime();
    let time = (newTime - oldTime)/1000;
    let mins = Math.floor(time / 60);
    let secs = Math.round(time - (mins * 60));

    time = `${mins} minutes and ${secs} seconds`
    data["time_spent"] = time;
    console.log(data["time_spent"])
}
//onSubmit() is the function called when the submit button is pressed. It updates the last things such as : time and total char. It also takes care of the
//rendering of the stats on the page.
function onSubmit()
{
    makeTime();
    totalChar();
    renderStats();
}


// add the functions to the DOM elements
document.getElementById("form").addEventListener("keydown", addKeyDownForField);
document.getElementById("register_sub").addEventListener("click", onSubmit)








