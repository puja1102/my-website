$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    }); 
});

//Current date
window.onload = setInterval(clock,1000);
function clock()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("date").innerHTML="Date: "+date+" "+month+", "+year;
}

//validating hiring
function hireValidation() {
    var hire = document.getElementById("hire");
    var hire_hr = document.getElementById("hire_hr");
    hire_hr.style.display = hire.checked ? "block" : "none";
}