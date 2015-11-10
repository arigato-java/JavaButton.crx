(function (window) {
  'use strict';
  function View() {
    this.scoreField=$$('#javabowrap');
  }
  View.prototype.updateScore=function(scr) {
    var span=document.createElement('div');
    span.appendChild(document.createTextNode(scr));
    span.className='javaco';
    span.addEventListener('animationend', function() {
      this.scoreField.removeChild(span);
    }.bind(this));
    this.scoreField.appendChild(span);
  };
  window.app.View = View;
})(window);
