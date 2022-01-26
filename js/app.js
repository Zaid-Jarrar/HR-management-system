'use strict';
//make first letter capital
// .charAt(0).toUpperCase()+ FullName.substring(1) first letter and rest the same

let idnumber = 1000;
function EmployeeInformation(FullName, Department,
  Level,ImageUrl = null){
  this.EmployeeID = id(idnumber);
  this.FullName = FullName.charAt(0).toUpperCase()+ FullName.substring(1);
  this.Department = Department;
  this.Level = Level;
  this.ImagePath = ImageUrl ||`https://raw.githubusercontent.com/RaniaAbdullahh/prep-course-py-01/main/Day08/Task/assets/${FullName}.jpg`;
  this.Salary = 0;

}
// (`./pic/${this.FullName}.jpg`|| ImageUrl)

// this.ImagePath = `./pic/${this.FullName}.jpg`; // note



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
  this.Salary = ((Math.floor(Math.random() * (max - min) + min))* 0.925).toFixed(0);
  return this.Salary;
};



// generator

// let idgen = () => {
//   return Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
// };
// idgen();




// const employees = [];

// employees.push(new EmployeeInformation('Ghazi Samer', 'Adminstration', 'Senior'));
// employees.push(new EmployeeInformation('Lana Ali',	'Finance','Senior'));
// employees.push(new EmployeeInformation('Tamara Ayoub',	'Marketing','Senior'));
// employees.push(new EmployeeInformation('Safi Walid',	'Administration',	'MidSenior'));
// employees.push(new EmployeeInformation('Omar Zaid'	,'Development'	,'Senior'));
// employees.push(new EmployeeInformation('Rana Saleh',	'Development',	'Junior'));
// employees.push(new EmployeeInformation('Hadi Ahmad'	,'Finance'	,'MidSenior'));




function id(x) {
  let newid = x + 1;
  idnumber++;
  return newid;
}




EmployeeInformation.prototype.render = function () {
  document.write(`<p>${this.FullName} has a salary of ${this.Salary} </p>`);

};

// for (let index = 0; index < employees.length; index++) {
//   // employees[index].netsalary;
//   employees[index].netsalary();
//   employees[index].render();
//   console.log(employees[index]);
// }







EmployeeInformation.prototype.render = function () {
  let mysection = document.getElementById('cards');
  mysection.style = 'display: flex; flex-wrap: wrap' ; // adds row at the end of each
  let divEl = document.createElement('div');
  mysection.appendChild(divEl);
  divEl.style = 'padding: 15px; margin:10px; width:180px; height: 1fr; background-color: #7CFC00; display:flex; align-items: center; flex-direction: column';

  let imgEl = document.createElement('img');
  divEl.appendChild(imgEl);
  imgEl.setAttribute('src',this.ImagePath);
  imgEl.style = 'width: 170px; height: 170px; border-radius: 50%';

  let p1El = document.createElement('p');
  divEl.appendChild(p1El);
  p1El.textContent = `Name: ${this.FullName}  ID:${this.EmployeeID}`;
  p1El.style = 'display: flex; margin:5px; width:138px;';

  let p2El = document.createElement('p');
  divEl.appendChild(p2El);
  p2El.textContent = `Department: ${this.Department}     Level: ${this.Level}`;
  p2El.style = ' margin: 0px; display: flex; width:138px;';

  let p3El = document.createElement('p');
  divEl.appendChild(p3El);
  p3El.textContent = `Salary: ${this.Salary}`;
  p3El.style = 'width:138px;';
};










let employeeform = document.getElementById('employeeform');
employeeform.addEventListener('submit', addemployeeform);

function addemployeeform(event){
  event.preventDefault();

  let FullName = event.target.name.value;
  let Department = event.target.Department.value;
  let Level = event.target.level.value;
  let ImageUrl = event.target.ImageUrl.value;

  let newemployee = new EmployeeInformation(FullName, Department,
    Level,ImageUrl);
  newemployee.netsalary();
  newemployee.render();

  console.log(newemployee);
}

