/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((value) => {
    if (value.profession === "developer") console.log(value);
  });
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) => {
    // console.log(value.profession === "developer" ? value : "");
    if (value.profession === "developer") console.log(value);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  console.log(
    (arr = arr.filter((value) => {
      return value.profession !== "admin";
    }))
  );
}

function concatenateArray() {
  console.log(
    (arr = arr.concat([
      { id: 5, name: "Rimi", age: "24", profession: "developer" },
      { id: 6, name: "shruti", age: "23", profession: "designer" },
      { id: 7, name: "soumi", age: "25", profession: "mentor" },
    ]))
  );
  //Write your code here, just console.log
}
