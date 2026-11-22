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

for (const project of projects) {
    console.log(`${project.name} was made with ${project.engine} using ${project.language}.`);
}