// past
function printYears(years) {
  console.log(arguments);
}

function printYearsNow(...years) {
  console.log(years);
}

printYears(2000, 2001, 2010, 2015, 2018);
printYearsNow(2000, 2001, 2010, 2015, 2018);
