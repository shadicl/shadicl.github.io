console.log("Portfolio loaded successfully!");

const projectNames = [
    "Difficulty Chart",
    "Universal Survival",
    "Skeplete",
    "Natural Volcano Survival",
    "The Unseen"
];

console.log(projectNames[0])
console.log(projectNames[4]);
console.log(projectNames.length);

projectNames.push("Bob's Burgers");

console.log(projectNames.length);

projectNames.pop();

for (const name of projectNames) {
    console.log(name);
}

projectNames.forEach((name) => {
        console.log(name);
});

const portfolioName = "Steven's Portfolio";

//portfolioName = "New Portfolio"; // Error

console.log(`My portfolio contains ${projectNames.length} projects.`);

function greetVisitor() {
    console.log("Welcome to my portfolio!");
}

greetVisitor();

function displayProject(name, engine) {
    console.log(`${name} was developed using ${engine}.`);
}

displayProject("Difficulty Chart", "Roblox");
displayProject("Universal Survival", "Roblox");
displayProject("Skeplete", "Unity");
displayProject("Natural Volcano Survival", "Unity");
displayProject("The Unseen", "Unreal Engine");

function calculateTotalProjects(roblox, unity, unreal) {
    return roblox + unity + unreal;
}

const total = calculateTotalProjects(2, 2, 1);

console.log(`Total projects: ${total}`);

const multiply = (a, b) => a * b;