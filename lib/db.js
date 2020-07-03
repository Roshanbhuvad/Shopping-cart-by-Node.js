"use strict";

var mongoose = require("mongoose");

var db = function () {
    return {
        config: function (conf) {
            mongoose.connect("mongodb://localhost:27017/tekbooks", {
                useNewUrlParser: true,
                useUnifiedTopology: true, //in latest version of mongoose we have to pass this 2nd option useNewUrlParser as true
            });
            var db = mongoose.connection;
            db.on("error", console.error.bind(console, "Connection Error"));
            db.once("open", function () {
                console.log("DB connection open....");
            });
        },
    };
};

module.exports = db();
