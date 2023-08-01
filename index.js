const screenplayS1E1 = [{
    character: "Gangster",
    text: "You should never have come back here, Mr. Samson.",
    episode: 1,
    season: 1,
}, 
{
    // Brock Samson: Uh-huh.
    character: "Brock Samson",
    text: "Uh-huh.",
    episode: 1,
    season: 1,
},
{
    // Brock Samson: Uh-huh.
    character: "Gangster",
    text: "Did you think I’d forgotten what you did to me?",
    episode: 1,
    season: 1,
}

];

const filters = {character: "Brock Samson", episode: 1};


const items = screenplayS1E1.filter(({character}) => character === "Brock Samson").map(({text}) => text);
console.log(items.length)

console.log(
    items[Math.floor(Math.random()*items.length)]
)