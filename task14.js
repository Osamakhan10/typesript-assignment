"use strict";
14.; //	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const guestList = ['Albert Einstein', 'Jane Austen', 'Nelson Mandela'];
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to a dinner event. Please join us for a delightful evening.`);
}
