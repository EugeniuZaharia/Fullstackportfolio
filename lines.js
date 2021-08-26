// Wait for HTML document to get ready
window.addEventListener('load', function() { // NOT `DOMContentLoaded`
    // Do something about HTML document
    var line = new LeaderLine(
      document.getElementById('start'),
      document.getElementById('end')
    );
  });