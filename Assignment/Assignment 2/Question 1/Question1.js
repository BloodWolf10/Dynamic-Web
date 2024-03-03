/* Json Array */

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);



  // Get the array of employees
  let employees = obj.employees;

  // Create the UL element
  let ul = document.createElement('ul');

  // Loop through the employees and create list items
  employees.forEach(function(employee) {
    let li = document.createElement('li');
    li.textContent = `${employee.firstName} ${employee.lastName}`;
    ul.appendChild(li);
  });

  // Get the div where you'll append the UL element
  let div = document.getElementById('demo');

  // Append the UL element to the div
  div.appendChild(ul);