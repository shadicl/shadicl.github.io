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

function setCardVisibility(card, isVisible) {
    card.classList.toggle("hidden", !isVisible);
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

const projectsSection = document.querySelector("#projects");
const projectCards = document.querySelectorAll(".project-card");

console.log(projectCards.length); // 5

const projectsHeading = document.querySelector("#projects-heading");

projectsHeading.textContent = `Projects (${projects.length})`;

const firstCard = document.querySelector(".project-card");

const highlightButton = document.querySelector("#highlight-button");
const hiddenButton = document.querySelector("#hidden-button");

let robloxVisible = true;

hiddenButton.addEventListener("click", () => {
    
    robloxVisible = !robloxVisible;

    projectCards.forEach((card) => {

        if (card.dataset.engine == "Roblox") {
            setCardVisibility(card, robloxVisible);
        }
    });

    hiddenButton.textContent = robloxVisible ? "Hide Roblox Projects" : "Show Roblox Projects";
})

console.log(firstCard.dataset.engine);
console.log(firstCard.dataset.language);

projectCards.forEach((card) => {
    
    console.log(card.dataset.engine);

    if (card.dataset.engine == "Roblox") {
        console.log(card.dataset.engine);
    }
});