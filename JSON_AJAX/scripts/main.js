let customers = '{ "customer" : [' +
'{"firstName":"Jane", "lastName":"Brown" },' +
'{"firstName":"James", "lastName":"Roberts" },' +
'{"firstName":"Andy", "lastName":"Reid" }]}';
 
let obj = JSON.parse(customers);
document.getElementById("demo").innerHTML = obj.customer[2].firstName + " " + obj.customer[2].lastName;