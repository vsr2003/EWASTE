export function formatDate(dateString) {
    // Extracting day, month, and year from the date object
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero indexed
    var year = date.getFullYear();

    // Adding leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Returning the formatted date string
    return day + '/' + month + '/' + year;
}