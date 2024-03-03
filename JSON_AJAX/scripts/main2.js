let customers = '{ "customer" : [' +
'{"firstName":"Jane", "lastName":"Brown" },' +
'{"firstName":"James", "lastName":"Roberts" },' +
'{"firstName":"Andy", "lastName":"Reid" }]}';
 
let obj = JSON.parse(customers);
document.getElementById("customerInfo").innerHTML = obj.customer[2].firstName + " " + obj.customer[2].lastName;
 
//AJAX Call
function changeContent () {
    const xhttp = new XMLHttpRequest(); //instantiate a new XMLHttpRequest object
    xhttp.onload = function() {
        document.getElementById("newText").innerHTML = this.responseText; //grabbing the div with id of newText
    }
    xhttp.open("GET", "data/mypoem.txt", true); //fetching data from data source
    xhttp.send();
}