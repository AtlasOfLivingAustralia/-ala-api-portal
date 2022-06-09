window.onload = function() {
    //<editor-fold desc="Changeable Configuration Block">
  
    // the following lines will be replaced by docker/configurator, when it runs in a docker-container
    window.ui = SwaggerUIBundle({
      urls: [
        { name: "alerts", url: "./specs/alerts-rest.yaml"},
        { name: "biocache", url: "./specs/biocache-http.yaml"},
        { name: "ecodata", url: "./specs/ecodata-http.yaml"},
        { name: "images", url: "./specs/images-rest.yaml"},
        { name: "userdetails", url: "./specs/userdetails-rest.yaml"}
      ],
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    });
  
    //</editor-fold>
  };