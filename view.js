var View = (function() {
  var $output;

  // I am privvy to the DOM
  function setOutput(output) {
    output = output.replace('\n', '<br/>');
    $output.html(output);
  }

  function init() {
    $output = $('#output');
    return {
      setOutput: setOutput
    };
  };

  return {
    init: init
  };
})();