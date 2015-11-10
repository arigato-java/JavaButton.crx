(function (window) {
  'use strict';
  function Controller(model,view) {
    this.model=model;
    this.view=view;
    this.java_sound=$('.javasound');
    this.nj=0;
    this.last_saved=this.last_pressed=Date.now();
    this.save_millis=3000;
  }
  Controller.prototype.javaboPressed = function() {
    this.playJava();
    this.model.incrementJava();

    var now=Date.now();
    this.last_pressed=now;
    this.view.updateScore(this.model.javaCount);
  };
  Controller.prototype.playJava = function() {
    this.java_sound[this.nj].play();
    this.nj=(this.nj+1)%this.java_sound.length;
  };
  Controller.prototype.saveIfNeeded = function() {
    if(this.last_saved<this.last_pressed) {
      var now=Date.now();
      if(now-this.last_pressed>this.save_millis) {
        //console.log("automatic save at "+now);
        this.model.save();
        this.last_saved=now;
      }
    }
  };
  window.app.Controller = Controller;
})(window);
