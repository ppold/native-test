var observableModule = require("data/observable");

var pageData = new observableModule.Observable();
var counter = 42;
var page;

exports.onPageLoaded = function(args) {
    page = args.object;
    pageData.set("message", this.counter + " taps left");
    page.bindingContext = pageData;
};

exports.tapAction = function () {
    counter--;
    if (counter <= 0) {
        pageData.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    } else {
        pageData.set("message", counter + " taps left");
    }
};

exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
