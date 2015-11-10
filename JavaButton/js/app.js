(function () {
	'use strict';

  function JavaButton(name) {
    this.model=new app.Model(name);
    this.view=new app.View();
    this.controller=new app.Controller(this.model,this.view);
  }
  
  var javabutton=new JavaButton('anatato-java');
  $$('#javabo').addEventListener('click',function(e) {
    javabutton.controller.javaboPressed();
  });
  window.setInterval(function() {
    javabutton.controller.saveIfNeeded();
  },javabutton.controller.save_millis);
})();
