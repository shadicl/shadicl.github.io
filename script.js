console.log("Portfolio loaded successfully!");

let projectCount = 5;

projectCount = 6;

console.log(projectCount); // 6

const portfolioName = "Steven's Portfolio";

//portfolioName = "New Portfolio"; // Error

console.log(`My portfolio contains ${projectCount} projects.`);

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