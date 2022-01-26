localStorage.getItem('employees');


function render(){

  let mysection = document.getElementById('mytable');
  let divEl = document.createElement('div');
  mysection.appendChild(divEl);
  let tableEL = document.createElement('table');
  divEl.appendChild(tableEL);
  tableEL.style= 'margin: 38px;height: 250px;width: 500px; border: solid';




  let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);
  let tr1El = document.createElement('tr');
  tableEL.appendChild(tr1El);
  let tr2El = document.createElement('tr');
  tableEL.appendChild(tr2El);
  let tr3El = document.createElement('tr');
  tableEL.appendChild(tr3El);
  let tr4El = document.createElement('tr');
  tableEL.appendChild(tr4El);
  let tr5El = document.createElement('tr');
  tableEL.appendChild(tr5El);

  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Department';
  let th1El = document.createElement('th');
  trEl.appendChild(th1El);
  th1El.textContent = 'Number of employees';
  let th2El = document.createElement('th');
  trEl.appendChild(th2El);
  th2El.textContent = 'Total salary';
  let th3El = document.createElement('th');
  trEl.appendChild(th3El);
  th3El.textContent = 'Average salary';



  let tdEl = document.createElement('td');
  tr1El.appendChild(tdEl);
  tdEl.textContent = 'Administration';
  let td2El = document.createElement('td');
  tr2El.appendChild(td2El);
  td2El.textContent = 'Marketing';
  let td3El = document.createElement('td');
  tr3El.appendChild(td3El);
  td3El.textContent = 'Development';
  let td4El = document.createElement('td');
  tr4El.appendChild(td4El);
  td4El.textContent = 'Finance';
  let td5El = document.createElement('td');
  tr5El.appendChild(td5El);
  td5El.textContent = 'Total';

}
render();
