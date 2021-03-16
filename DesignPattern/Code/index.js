const collapse = 3;

let list = [1, 5, 5, 6, 9];
const uniqueList = [...new Set(list)];
list = uniqueList;

while (list.length > collapse) {
    list.pop();
}

console.log(list);

