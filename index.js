// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(collection, name) {
    const matchingArray = [];

    for (const member of collection) {
       // can I make the toLowerCase more universal and not only 
       // versions in all lower case?
        if (member === name || member === name.toLowerCase()) {
             matchingArray.push(member)
        };
    }
    return matchingArray;
}

//console.log(findMatching(drivers, 'Bobby'))


function fuzzyMatch(collection, name) {
    const matchingArrayFuzz = [];
    
    for (const member of collection) {
        if (member[0] === name[0]) {
            matchingArrayFuzz.push(member)
        }
    }
    return matchingArrayFuzz;
}

const driversExpanded = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(collection, name) {
    const matchingArrayExpanded = [];

    for (const member of collection) {
        if (member.name === name) {
            matchingArrayExpanded.push(member)
        }
    }
return matchingArrayExpanded;
}