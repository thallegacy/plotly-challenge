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
  
    });
  }