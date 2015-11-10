(function (window) {
  'use strict';
  function Model(namae) {
    this.namae=namae;
    this.javaCount=0;
    var callback=function(data){
      this['javaCount']=data['javaCount'];
    };
    chrome.storage.sync.get(namae, function(storage) {
      if(namae in storage) {
        callback.call(this,storage[namae]);
      } else {
        storage={};
        storage[namae]={ javaCount:0 };
        chrome.storage.sync.set(storage,function() {
          callback.call(this,storage[namae]);
        }.bind(this));
      }
    }.bind(this));
    chrome.storage.onChanged.addListener(function(changes,areaName) {
      var anajava=changes[this.namae];
      var newJavaCount=anajava['newValue']['javaCount'];
      this.javaCount=Math.max(newJavaCount,this.javaCount);
    }.bind(this));
  }
  Model.prototype.incrementJava = function() {
    this.javaCount++;
  };
  Model.prototype.save = function() {
    var storage={};
    storage[this.namae]={ javaCount: this.javaCount };
    chrome.storage.sync.set(storage,function() { }.bind(this));
  };
  window.app.Model = Model;
})(window);
