16; //	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• //Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• //Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of 
var guests = ["khan", "rehan", "saad"];
// Inform that a bigger dinner table is available
console.log("Good news! We found a bigger dinner table.\n");
// Add new guests
guests.unshift("rehan"); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "osama"); // Add to the middle
guests.push("anas"); // Add to the end using append
// Print invitation messages
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to a dinner at my place. Please join us!\n"));
});
