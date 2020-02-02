const address = {
  country: "South Korea",
  city: "Seoul",
  street: "Gangnam",
  str_num: 141,
  postcode: "00510"
};

//객체 비구조화, object destructuring
const country = "America";
const city = "LA";
//alias
const { country: nextcountry, city: nextcity } = address;
console.log(`${nextcountry} ${nextcity}`);

//배열 비구조화, array destructuring
const [firstcountry, secondcountry, thirdcountry] = [
  "Japan",
  "Korea",
  "America"
];

console.log(secondcountry);

//객체 리터럴, object literal
function getAddress(country, city, street) {
  const myAddress = { country, city, street };
  console.log(myAddress);
}

getAddress("Japan", "Osaka", "street");
