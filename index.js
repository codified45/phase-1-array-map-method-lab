const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


// titleCased(): returns an array with title case tutorial names. Note that this function takes no arguments and should use the global tutorials variable as data.

// This version works by destructively modifying the tutorials array.  

const titleCased = () => {

  const titleCasingFunc = (tutElement) => {
    const strArray = tutElement.split("");
    let previousCharIsSpace = false;
    let firstChar = strArray[0].toUpperCase();
    strArray.splice(0, 1, firstChar);

    for (let i = 1; i < strArray.length; i++) {
      if (strArray[i] === " ") {
        previousCharIsSpace = true;
      } else if (previousCharIsSpace) {
        strArray.splice(i, 1, strArray[i].toUpperCase());
        previousCharIsSpace = false;
      }
    }

    let newTutElement = strArray.join(""); // need the quotes in there or else you get commas in between every letter
    tutorials.splice(tutorials.indexOf(tutElement), 1, newTutElement)
  }

  tutorials.map(titleCasingFunc);
  return tutorials;
}


// This version works by creating a newTutorialsArray (non-destructive)

const newTutorialsArray = [];

const titleCasedFoo = () => {

  const titleCasingFunc = (tutElement) => {
    const strArray = tutElement.split("");
    let previousCharIsSpace = false;
    let firstChar = strArray[0].toUpperCase();
    strArray.splice(0, 1, firstChar);

    for (let i = 1; i < strArray.length; i++) {
      if (strArray[i] === " ") {
        previousCharIsSpace = true;
      } else if (previousCharIsSpace) {
        strArray.splice(i, 1, strArray[i].toUpperCase());
        previousCharIsSpace = false;
      }
    }

    let newTutElement = strArray.join(""); // need the quotes in there or else you get commas in between every letter
    newTutorialsArray.push(newTutElement);
  }

  tutorials.map(titleCasingFunc);
  return newTutorialsArray;
}