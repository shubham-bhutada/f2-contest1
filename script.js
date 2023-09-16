const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((_, index) => {
        if(data[index].profession === "developer") {
            console.log(data[index]);
        }
    })
  }
  
  // 2. Add Data
  function addData() {
    let newName = prompt(`Enter the name`);
    let newAge = Number(prompt(`Enter the age of ${newName}`));
    let newProf = prompt(`Enter the profession of ${newName}`);
    let obj = { name: newName, age: newAge, profession: newProf }
    data.push(obj);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    // with the help of fiter method, we are returning a new array containing no admin 
    let noAdmins = data.filter((element) => element.profession !== "admin");
    console.log(noAdmins);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
        { name: "Sam", age: 22, profession: "Junior developer" },
        { name: "Peter", age: 29, profession: "Manager" },
      ];
      // Using the spread operator, we are copying the 2 arrays; data[] and dummyArray[] in a new array
      let concatenatedArray = [...data, ...dummyArray];
      console.log(concatenatedArray)
  }
  
  // 5. Average Age
  function averageAge() {
    let f = (prev, element) => {
        return prev + element.age
    }
    let ageTotal = data.reduce(f, 0);
    // the reduce function will return the sum of all the ages and to compute the average age, we are deviding it with total number of employees
    console.log(ageTotal/data.length)
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    // f function returns an array of elements with age greter than 25 and stored in ageCheck variable
    let f = (element) => {
        return element.age > 25
    }
    let ageCheck = data.filter(f)
    console.log(ageCheck);
    // we return false if the returned array from filter method is empty else we return true
    if(ageCheck.length === 0) {
        return false;
    }
    else {
        return true;
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    // creating an mepty array where our unique professions will be stored but initially it's empty
    let uniqueProf = [];
    // using forEach method, we are iterating over the data array
    data.forEach((element) => {
        let prof = element.profession;
        // we are checking if the profession which we are getting in prof is present in uniqueProf or not 
        // if not then we are pushing/adding it in uniqueProf
        if (!uniqueProf.includes(prof)) {
            uniqueProf.push(prof);
        }
    });
    return uniqueProf;

  }
  
  // 8. Sort by Age
  function sortByAge() {
    // using the comparator function, we are sortiong the array in ascending order
    data.sort(a,b => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((element) => {
        if(element.name === "john") {
            element.profession = "manager"
        }
    });
    console.log(data)
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developer = 0, admin = 0;
    data.forEach((element) => {
        if(element.profession === "developer") {
            developer++;
        }
        else if(element.profession === "admin") {
            admin++;
        }
    })
    console.log(`Developer: ${developer} \nAdmin: ${admin}`);
  }