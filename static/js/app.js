function buildPlot() {
  /* data route */
  const url = "/api/pals";
  d3.json(url).then(function(response) {

    console.log(response);

    const data = response;

    const layout = {
      scope: "san diego",
      title: "Pet Pals",
      showlegend: false,
      height: 3000,
             width: 2380,
      geo: {
        scope: "San Diego",
        projection: {
          type: "albers usa"
        },
        showland: true,
        landcolor: "blue",
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: "red",
        countrycolor: "green"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();
