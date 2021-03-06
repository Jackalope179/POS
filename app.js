var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var helpers = require("handlebars-helpers")();
var logger = require("morgan");
var hbs = require("hbs");
const exphbs = require("express-handlebars");

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const moment = require("moment");

var app = express();

// const connection = require("./models/food")

hbs.registerHelper("test", function(value) {
    return value + 1;
});

hbs.registerHelper("checkPaymentID", function(id, paymentID) {
    console.log(id)
    console.log(paymentID)
    paymentID = parseInt(paymentID)
    var element = document.getElementById(paymentID).value;
    return id === paymentID;
});

hbs.registerHelper("NumberWithCommas", function(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
})


hbs.registerHelper("formatDate", function(datetime) {
    var DateFormats = {
        short: "DD MMMM - YYYY",
        long: "dddd DD.MM.YYYY HH:mm"
    };
    // Use UI.registerHelper..
    if (true) {
        // can use other formats like 'lll' too
        format = DateFormats['long'];
        return moment(datetime).format(format);
    } else {
        return datetime;
    }
});


const options = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pos',
    // port: 3310
};

const sessionStore = new MySQLStore(options);


app.use(
    session({
        secret: 'cookie_secret',
        name: "POScookie",
        login: 0,
        cookie: {
            maxAge: 60000 * 60
        },
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
    })
);


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
// module.exports = options;