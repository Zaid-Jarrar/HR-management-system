'use strict';


function EmployeeInformation(EmployeeID, FullName, Department,
  Level, Salary) {

  this.EmployeeID = EmployeeID;
  this.FullName = FullName;
  this.Development = Department;
  this.Level = Level;
  this.ImagePath = `./pic/${this.EmployeeID}.png`;
  this.Salary = Salary;

}




EmployeeInformation.prototype.netsalary = function getrandomsalary() {
  let min = 0;
  let max = 0;
  if (this.Level === 'Junior') {
    min = 500;
    max = 1000;
  }
  else if (this.Level === 'MidSenior') {
    min = 1000;
    max = 1500;

  }
  else if (this.Level === 'Senior') {
    min = 1500;
    max = 2000;


  }

  min = Math.ceil(min);
  max = Math.floor(max);
  this.Salary = (Math.floor(Math.random() * (max - min) + min))* 0.925;
  return this.Salary;
};
const employees = [];

employees.push(new EmployeeInformation(1000,'Ghazi Samer', 'Adminstration', 'Senior'));
employees.push(new EmployeeInformation(1001,'Lana Ali',	'Finance','Senior'));
employees.push(new EmployeeInformation(1002	,'TamaraAyoub',	'Marketing','Senior'));
employees.push(new EmployeeInformation(1003,	'Safi Walid',	'Administration',	'MidSenior'));
employees.push(new EmployeeInformation(1004	,'Omar Zaid'	,'Development'	,'Senior'));
employees.push(new EmployeeInformation(1005,	'Rana Saleh',	'Development',	'Junior'));
employees.push(new EmployeeInformation(1006	,'Hadi Ahmad'	,'Finance'	,'MidSenior'));



// console.log(ghaziSamer);



// console.log(ghaziSamer.Salary);




EmployeeInformation.prototype.render = function () {
  document.write(`<p>${this.FullName} has a salary of ${this.Salary} </p>`);

};

for (let index = 0; index < employees.length; index++) {
  // employees[index].netsalary;
  employees[index].netsalary();
  employees[index].render();
  console.log(employees[index]);
}







