"use strict";
18.; //	Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its oricc  by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Inform that only two people can be invited
console.log("Unfortunately, due to unforeseen circumstances, we can only invite two people for dinner.\n");
// Remove guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner this time.\n`);
}
// Print messages to the remaining two guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner. Please join us!\n`);
});
// Empty the list
guests = [];
// Print to confirm an empty list
console.log("Final guest list:", guests);
