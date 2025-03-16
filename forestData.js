let cityName = "Techville";
let parkCount = 5;
let parks = [
    { name: "Central Park", trees: [ { species: "Maple", age: 5, health: "Good", height: 20 }, { species: "Birch", age: 7, health: "Good", height: 18 }],facilities: ["playground", "swimming pool"]},
    { name: "Riverside Park", trees: [  { species: "Oak", age: 30, health: "Excellent", height: 25 }, { species: "Redwood", age: 50, health: "Good", height: 100 }  ], facilities: ["boating", "fishing"]},
    { name: "Hilltop Park", trees: [ { species: "Pine", age: 10, health: "Fair", height: 15 }],facilities: ["hiking trails"] }];
parks.find(park => parks.name === "Riverside Park").name = "Riverside Greenspace";
parks.find(park => parks.name === "Central Park").trees.find(tree => tree.species === "Maple").species = "Sugar Maple";
parks.find(park => parks.name === "Central Park").trees.push({ species: "Birch", age: 7, health: "Good", height: 18});
let CentralParkTrees = park.find(park => park.name === "Central Park").trees.map(tree => tree.species);
let allTrees = parks.flatMap(park => park.trees);
let averageTreeAge = allTrees.reduce((sum,tree ) => sum+ tree.age, 0) / allTrees.length;
let talestTree = allTrees.reduce((maxTree, Tree) => (Tree.height > maxTree.height ? tree: maxTree), allTrees[0]);
let centralPark = parks.find(park => park.name === "Central Park");
centralPark.facilities = centralPark.facilities.filter(facility => facility !== "Playground");
let ParksJSON = JSON.stringify(parks, null, 2);
console.log(`Park Name: ${parks[0].name}, Facilities: ${parks[0].facilities.join(", ")}`);
console.log(`Tree Species in  ${parks[2].name}: ${parks[2].trees.map(tree => tree.species).join(", ")}`);
