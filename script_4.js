const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

const Bornin70s = entrepreneurs.filter(people => (people.year < 1980) && (people.year >= 1970));
console.log(Bornin70s)

console.log("===============================================")
 let removeYear = entrepreneurs.map(({first, last}) => ({first, last}));
  console.log(removeYear);

console.log("===============================================") 

let NewOld= entrepreneurs.map(people => {
 let newage = {
  "first": people.first,
  "last": people.last,
  "age": (2021-people.year)
};
return newage;
})
console.log(NewOld)
console.log("===============================================") 
let sortFirst = entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : (a.last > b.last) ? -1 : 0);

console.log(sortFirst);

