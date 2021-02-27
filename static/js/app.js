function init() {
    // Grab a reference to the dropdown select element
    var selectoption = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      
      //Grab the names to use from the names in the json
      var sampleNames = data.names;
    
      //Console check
      console.log(sampleNames);

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
    //   console.log(filteredData)

      var otu_ids = filteredData.otu_ids;
      var otu_labels = filteredData.otu_labels;
      var sample_values = filteredData.sample_values;

      //console check
    //   console.log(otu_ids);
    //   console.log(otu_labels);
    //   console.log(sample_values);
    
      // get 10 ten by slicing and sorting
      // sort in reverse for Hbar descending
      var top10sv = sample_values.slice(0, 10).reverse();
      var top10ol = otu_labels.slice(0, 10).reverse();
      // Add OTU label to each ID  
      var top10oid = otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();

      //console check
      console.log(top10sv);
      console.log(top10ol);
      console.log(top10oid);

      var hbarData = [
        {
          x: top10sv,
          y: top10oid,
          text: top10ol,
          type: "bar",
          orientation: "h",
        }
      ];

      Plotly.newPlot("bar", hbarData);
    });
  }