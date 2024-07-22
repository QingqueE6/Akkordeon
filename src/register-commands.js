require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
    {
        name: "hello",
        description: "just a simple hello command",
    },

    {
        name: "random",
        description: "just a random command",
    },

    {
        name: "add",
        description: "adds numbers xd",
        options: [{   
                    name: "first-number",
                    description: "the first number of the equation",
                    type: ApplicationCommandOptionType.Number, 
                    required: true,
                    choices: [{
                            name: "one",
                            value: 1,
                        },
                        {
                            name: "two",
                            value: 2,
                        },
                        {
                            name: "three",
                            value: 3,
                        },
                    ]
                },
                {
                    name: "second-number",
                    description: "the second number of the equation",
                    type: ApplicationCommandOptionType.Number,
                    required: true,
                }
        ]
    },
];

const rest = new REST({version: "10"}).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log("Registering commands. . .");
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                        { body: commands }
                )
        console.log("Command registered!");

    } catch (error) {
        console.log(error);
    }
})();