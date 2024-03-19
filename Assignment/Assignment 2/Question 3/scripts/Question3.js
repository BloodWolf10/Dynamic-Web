$(document).ready(function() {
    $('#dataTable').DataTable({
      "ajax": {
        "url": "scripts/employees.json",
        "dataSrc": "data"
      },
      "columns": [
        { "data": 0 }, // Name
        { "data": 1 }, // Position
        { "data": 2 }, // Office
        { "data": 3 }, // Extn.
        { "data": 4 }, // Start date
        { "data": 5 }  // Salary
      ]
    });
  });