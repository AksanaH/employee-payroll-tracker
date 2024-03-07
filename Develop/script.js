// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
const employees = []; //add array
// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let anotherEmployee = true;
  while (anotherEmployee) {
    let firstName = window.prompt("Enter First name");
    let lastName = window.prompt("Enter Last name");
    let salary;
    while (true) {
      salary = prompt("Enter salary");
      if (!isNaN(salary)) {
        break;
      }
      alert("Only numbers allowed!");
    }

    let employee = {}; // object employee with properties: first name, last name, salary
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employees.push(employee); //add employee to employees array
    anotherEmployee = confirm("Do you want to add another employee?");
  }
  // console.log(employees);
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  let sumSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sumSalary += Number(employeesArray[i].salary);
  }
  averageSalary = sumSalary / employeesArray.length;
  console.log(
    `The average employee salary between our ${
      employeesArray.length
    } employee(s) is ${Math.round(averageSalary * 100) / 100}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const options = employeesArray;
  const index = Math.floor(Math.random() * options.length);
  const computerChoice = options[index];
  // window.alert(`The computer chose ${computerChoice}`);
  console.log(
    `Congratulations to ${computerChoice.firstName} ${computerChoice.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
