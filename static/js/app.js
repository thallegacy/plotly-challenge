function init() {
    // Grab a reference to the dropdown select element
    var selectoption = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      
      //Grab the names to use from the names in the json
      var sampleNames = data.names;
    
      //Console check
      console.log(sampleNames)

      //Loop through the names
      sampleNames.forEach((value) => {
          // Append a cell to the row for each value using "td" tag
          option = selectoption.append("option")
          // Append the text from each value to the option
          option.text(value).property("value", value);
       
      });
      
      // Grab the first sample from the list to initiate
      var firstName = sampleNames[0];
      //Console check
      console.log(firstName)

      //Run function
      hbarChart(firstName);

    });
  }
  init();

  //Function to build horizontal bar chart
  function hbarChart(sampleData) {
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {

      //Grab the samples to use from the samples in the json
      var samples = data.samples;
      //Filter the data based on the ID/name given from samples
      var filteredData = samples.filter(sample => sample.id == sampleData)[0];
      
      //console check
      console.log(filteredData)

    });
  }