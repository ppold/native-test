var observableModule = require("data/observable");
var frameModule = require("ui/frame");

var pageData = new observableModule.Observable();
var counter = 42;
var page;

exports.onPageLoaded = function(args) {
    page = args.object;
    pageData.set("message", counter + " taps left");
    page.bindingContext = pageData;
};

exports.tapAction = function () {
    counter--;
    if (counter <= 0) {
        var topmost = frameModule.topmost();
        topmost.navigate("tasks");
        // pageData.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    } else {
        pageData.set("message", counter + " taps left");
    }
};
