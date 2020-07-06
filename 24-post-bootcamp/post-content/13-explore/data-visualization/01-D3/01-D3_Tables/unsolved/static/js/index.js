// ================ PART 1 ================ //

// Create a variable called presTBody and select the element based on its ID in html.
var presTBody = d3.select('#president_tbody');

// Console log the imported data from data.js
console.log(presData)

// Append each president to the table.
// HINT: 1 table row per president, with multiple table data elements in each row.
presData.forEach((info) => {
  var row = presTBody.append("tr")
  Object.entries(info).forEach(([key,value])=> {
    var cell = row.append("td");
    cell.text(value)
  });
});

// ================ Challenge ================ //

// Create a variable called 'addBtn' and select the element with an id of 'add_btn'.
var addBtn = d3.select('#add_btn')

// Create an on click listener for the "add_btn" ID on your html.
addBtn.on('click', () => {
  // Prevent the page from refreshing
  d3.event.preventDefault()

  // Store the values of each id into separate variables.
  var number = d3.select('#add_number').property('value')
  var president = d3.select('#add_president').property('value')
  var birth = d3.select('#add_birthYear').property('value')
  var death = d3.select('#add_deathYear').property('value')
  var start = d3.select('#add_tookOffice').property('value')
  var end = d3.select('#add_leftOffice').property('value')
  var party = d3.select('#add_party').property('value')

  // Create an object called "input_data" as an object containing the keys of "number", "president", "birth_year", "death_year", "took_office", "left_office", "party"
  // Set their values corresponding to the variables you set earlier.
  input_data = {
   "number": number,
    "president": president,
    "birth_year": birth,
    "death_year": death,
    "took_office": start,
    "left_office": end,
    "party": party
  };
  
  // Create a table row and append each cell's value from input_data as table data.
  var row = presTBody.append("tr")
  Object.entries(input_data).forEach(([key,value])=> {
    var cell = row.append("td");
    cell.text(value)
  });
})
// FINALLY If you haven't done so, add bootstrap CDN to your index.html and make it pretty.

