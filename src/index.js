require('dotenv').config()
const BadWords = ["D4", "d4", "Diablo", "diablo", "D3", "d3"]
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
const Token = process.env.DISCORD_TOKEN;
const client = new Client({
    intents: [     // intents == Permissions, check https://discord.com/developers/docs/topics/gateway#list-of-intents for a list of all intents
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on("messageCreate", (message) =>{
    if (message.author.bot) return; // to make sure the bot doesnt loop itself

    for (let i = 0; i < BadWords.length; i++) {
        if(message.content.includes(BadWords[i])){
            return message.reply(`<:d4bad:1260859969230733384>`);
        }
    }
});

client.on("interactionCreate", (interaction, message) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.isChatInputCommand()){
        if(interaction.commandName === "random"){
            interaction.reply(`wow, so random <:psyduck:1264852209179295845>`);
        }
        if(interaction.commandName === "hello"){
            interaction.reply(`Ello <:aloo:1262373261824491533>`);
        }
        if(interaction.commandName === "add"){
            const number1 = interaction.options.get("first-number").value;
            const number2 = interaction.options.get("second-number").value;
            let result = number1 + number2;
            interaction.reply(`The result is ${result}!`);
        }
        if(interaction.commandName === "embed"){
            const embed = new EmbedBuilder()
            .setTitle("Look at this guy lmao")
            .setDescription(`xD <:cluegifungus:1265274381345624186>`) // <:cluegifungus:1265274440816525393>
            .setImage(interaction.user.avatarURL())
            // .setImage("https://cdn.discordapp.com/attachments/1265271317905805442/1265271412864843777/qingque_thumbnail.png?ex=66a0e754&is=669f95d4&hm=c433c952d670e95b905cee55f37bec43ff40ee6d50ed13a38e6acba040db0586&");

            interaction.reply({embeds: [embed]});
        }
        console.log(interaction);
    }
});

client.login(Token);

