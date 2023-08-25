//43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      const greatMagician = "the Great " + magician;
      greatMagicians.push(greatMagician);
    }
    return greatMagicians;
  }
  
  function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianName: string[] = ["Magician 1", "Magician 2", "Magician 3"];
  
  const MagicianNames = makeGreat([...magicianNames]); // Creating a copy of the array
  
  console.log("Original magician names:");
  showMagicians(magicianNames);
  
  console.log("\nGreat magician names:");
  showMagicians(greatMagicianNames);
  