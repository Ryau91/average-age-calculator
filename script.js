const people = []; //empty array

function completeForm(event) {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const consent = document.getElementById("consent").value;
  console.log(fullName, age, email, consent);
  const peopleData = document.getElementById("people-data");
  console.log(peopleData);

  // create the new row of data to insert
  let tr = document.createElement("tr");

  tr.innerHTML = `<td>${fullName}</td>
    <td class='table-row-age'>${age}</td>
    <td>${email}</td>`;

  // insert the new row into the body of the table
  peopleData.insertAdjacentElement("beforeend", tr);

  // get collection of table-row-age elements and convert to an array
  const ageRowArray = Array.from(
    document.getElementsByClassName("table-row-age")
  );
  // convert array to just the values (innerHTML) in the elements
  const ageArray = ageRowArray.map((row) => parseInt(row.innerHTML));
  // calculate the sum using the reduce method
  const sum = ageArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  // calculate the mean and round to 2 decimal places
  const mean = (sum / ageArray.length).toFixed(2);

  // take the mean and display it
  const averageAgeToDisplay = document.getElementById("average-age");
  averageAgeToDisplay.textContent = "Average age: " + mean;
  console.log(averageAgeToDisplay.textContent);
}
