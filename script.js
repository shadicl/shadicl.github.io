console.log("Portfolio loaded successfully!");

const projects = [
    {
        name: "Difficulty Chart",
        engine: "Roblox",
        language: "Luau"
    },

    {
        name: "Universal Survival",
        engine: "Roblox",
        language: "Luau"
    },

    {
        name: "Skeplete",
        engine: "Unity 2D",
        language: "C#"
    },

    {
        name: "Natural Volcano Survival",
        engine: "Unity 2D",
        language: "C#"
    },

    {
        name: "The Unseen",
        engine: "Unreal Engine",
        language: "C++"
    }
]

function getProjectsByEngine(engine) {
    return projects.filter(project => project.engine === engine);
}

function getProjectsByLanguage(language) {
    return projects.filter(project => project.language === language);
}

const robloxProjects = getProjectsByEngine("Roblox");
const unityProjects = getProjectsByEngine("Unity 2D");
const unrealProjects = getProjectsByEngine("Unreal Engine");

const luauLanguages = getProjectsByLanguage("Luau");

console.log(robloxProjects);
console.log(unityProjects);
console.log(unrealProjects);
console.log(luauLanguages);

for (const project of robloxProjects) {
    console.log(project.name);
}

for (const project of unityProjects) {
    console.log(project.name);
}

for (const project of unrealProjects) {
    console.log(project.name);
}

for (const project of projects) {
    console.log(`${project.name} was made with ${project.engine} using ${project.language}.`);
}