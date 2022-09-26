
exports.getDate = function() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    const day = today.toLocaleString("en-us", options);
    return day;
}

exports.getDay = function() {

    const today = new Date();
    
    const options = {
        weekday: "long"
    }

    const day = today.toLocaleString("en-us", options);
    return day;
}
