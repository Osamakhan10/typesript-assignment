//45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Allow any additional key-value pairs
  }
  
  function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    for (const [key, value] of options) {
      car[key] = value;
    }
  
    return car;
  }
  
  const carInfo = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2023"]);
  
  console.log(carInfo);
  