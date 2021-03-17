// CODE CHALLENGE

let newPanel = 9;
const openPanels = 3;
let panels = [1, 1, 7, 8, 1, 7, 3, 9, 2, 15]; 


// delete duplicate panels
const uniquePanels = [...new Set(panels)];
panels = uniquePanels;

// add new panel
panels.unshift(newPanel);

// delete too many panels
while (panels.length > openPanels) {
    panels.pop();
    // Action.do close !!!
}

console.log(panels);

