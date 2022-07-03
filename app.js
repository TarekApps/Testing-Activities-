//Test 1

let notNull = (name) => {
  return name;
};

//Test 2

let truthy = (x) => {
  return x;
};

//Test 3

let notFalsy = () => {
  return true;
};

//Test 4

let createObj = (name) => {
  let obj = {
    firstName: name,
    newUser: true,
  };
  return obj;
};

// Test 5

let checker = (arr) => {
  let checked = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      checked.push(arr[i]);
    }
  }
  return checked;
};

function convertNum(num) {
  num.toString();
  return num;
}

planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];

let whereAmI = (planetSelector) => {
  return planets[planetSelector];
};

module.exports = {
  notNull,
  truthy,
  notFalsy,
  createObj,
  checker,
  convertNum,
  whereAmI,
};
