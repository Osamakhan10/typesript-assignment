19.; //	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
letguests: string: [
    "Leonardo da Vinci",
    "Albert Einstein",
    "Maya Angelou",
    "Marie Curie",
    "David Attenborough",
    "Nelson Mandela"
];
// Print the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(guests.length, "\n"));
// Inform that only two people can be invited
console.log("Unfortunately, due to unforeseen circumstances, we can only invite two people for dinner.\n");
// Remove guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", we won't be able to invite you to dinner this time.\n"));
}
// Print messages to the remaining two guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to the dinner. Please join us!\n"));
});
// Empty the list
guests = [];
// Print to confirm an empty list
console.log("Final guest list:", guests);
