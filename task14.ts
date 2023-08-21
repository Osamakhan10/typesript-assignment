14.//	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const guestlist:string[] = ["saad","khan","huzaifa"];
function sendDinnerInvitation (name:string):string{

    return `Dear ${name},\n\nYou are cordially invited to a dinner gathering at my residence. It would be an honor to have you join us for an evening of insightful conversations and delightful company.\n\nDate: [Insert Date]\nTime: [Insert Time]\nLocation: [Insert Address]\n\nPlease let us know if you can attend.\n\nSincerely,\n[Your Name]`;
}

// Sending invitations to each guest
for (const guest of guestList) {
  const invitationMessage = sendDinnerInvitation(guest);
  console.log(invitationMessage);
  console.log("\n---\n");
    
}
