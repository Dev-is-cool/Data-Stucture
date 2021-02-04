notsa=[];
function submit(){
    var name_1 =document.getElementById("nots1").value;
    var name_2 =document.getElementById("nots2").value;
    var name_3 =document.getElementById("nots3").value;
    var name_4 =document.getElementById("nots4").value;
notsa.push(name_1);
notsa.push(name_2);
notsa.push(name_3);
notsa.push(name_4);

console.log ("notsa");
document.getElementById("display_name").innerHTML = notsa;
document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display= "inline-block";
}
function sorting(){
    notsa.sort();
    console.log ("notsa");
    document.getElementById("display_name").innerHTML = notsa;
}