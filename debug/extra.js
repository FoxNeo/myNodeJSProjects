let text = "Debugger works!";

function show(){
    console.log(text);
    debugger;
}

module.exports = {
    show: show
}