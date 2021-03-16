// CODE CHALLENGE

// incoming Number
let newNumber = 0;

// value how many are active
const collapse = 3;

// some list
let list = [1, 2, 3];


// delete all doubles
const uniqueList = [...new Set(list)];
list = uniqueList;

// delete last elements more than collape value
// while (list.length >= collapse) {
//     list.pop();
// }

// move all elements one step next
let item;
let count;
let listElement = collapse;
let position = 0;

count = 1;
while (count <= collapse) {
    listElement--;
    item = list[listElement];
    list[collapse - position] = item;
    position++;
    if (position == collapse) {
        list[collapse - position] = newNumber;
    }
    count = count + 1;
}

// delete last elements more than collape value
while (list.length > collapse) {
    list.pop();
}

console.log(list);

