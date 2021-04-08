// CODE CHALLENGE

let newPanel = "CollapsePanel-9";
const openPanels = 3;
let panels = ["CollapsePanel-1", "CollapsePanel-1", "CollapsePanel-2", "CollapsePanel-5", "CollapsePanel-15"]; 


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

