"use strict";
//.29Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
//independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your 
//array. If the fruit is in your array, the if block should print a statement, such as You 
//really like bananas
const favorite_fruits = ["apple", "banana", "mango", "pinaple"];
if (favorite_fruits.includes(`apple`)) {
    console.log("i love apple");
}
if (favorite_fruits.includes(`banana`)) {
    console.log("i love banana");
}
if (favorite_fruits.includes(`mango`)) {
    console.log("i love mango");
}
if (favorite_fruits.includes(`pinaple`)) {
    console.log("i love pinaple");
}
