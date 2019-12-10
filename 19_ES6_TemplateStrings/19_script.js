// ES6 Template Strings/Template literals
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fiteen is 15 and 
// not 20. "
// Template strings are even used to form a html templates from javascript.
// Without template literals
function getTableData(employees) {
    let tempStr = ' ';
    for(let i=0; i<employees.length; i++){
        let employee = employees[i];
        tempStr += "<tr>" +
                        "<td>" + employee.name + "</td>" +
                        "<td>" + employee.age + "</td>" +
                        "<td>" + employee.designation + "</td>" +
                    "</tr>";
    }
    return tempStr;
}
tBodyElement.innerHTML = getTableData(employees);

// With template literals
function getTableDataUsingBackTick(employees) {
    let tempStr = ' ';
    for(let i=0; i<employees.length; i++){
        let employee = employees[i];
        tempStr += `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                    </tr>`;
    }
    return tempStr;
}
tBodyElement.innerHTML = getTableDataUsingBackTick(employees);