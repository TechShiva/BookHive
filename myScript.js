


function add()
{
    var fn = Number(document.getElementById("num1").value);
    var sn = Number(document.getElementById("num2").value);
    var result = fn + sn;
    //window.alert(result);
    var display = document.createElement("h2");
    display.textContent = result;
}
function sub()
{
    var fn = Number(document.getElementById("num1").value);
    var sn = Number(document.getElementById("num2").value);
    var result = fn - sn;
    window.alert(result);
}
function mul()
{
    var fn = Number(document.getElementById("num1").value);
    var sn = Number(document.getElementById("num2").value);
    var result = fn * sn;
    window.alert(result);
}
function div()
{
    var fn = Number(document.getElementById("num1").value);
    var sn = Number(document.getElementById("num2").value);
    var result = fn / sn;
    window.alert(result);
}                                                                 