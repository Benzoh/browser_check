var $ = require('jquery');
var Push = require('push.js');

$(function(){

  // TODO: ブラウザの通知を送れるようにする

  function push() {
    console.log("push!");
    Push.create('Hello World!')
  }

  setInterval(function() {
    alert("Browser Check!!");
  }, 3000000);

  // 3000 3秒
  // 60000 60秒
  // 3000000 50分

  window.onbeforeunload = function(e) {
    return 'window onbeforeunload';
  };

});

// # build command
// ```
// webpack --mode development ./_assets/js/main.js --output ./_assets/js/bundle.js
// ```