require('dotenv').config()
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const Token = process.env.DISCORD_TOKEN;
const client = new Client({
    intents: [     // intents == Permissions, check https://discord.com/developers/docs/topics/gateway#list-of-intents for a list of all intents
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const roles = [
    {id: "1265938810848411721", label: "Qingque Enjoyer"},
    {id: "1265938900786872332", label: "Jingliu Simp"},
    {id: "1265938982689181727", label: "Huohuo Believer"},
    {id: "1265939199522111500", label: "Seele Overlord"},
    {id: "1265939409551757322", label: "Firefly Stan"},
]

client.on("ready", async(c) =>{
    try{
        const channel = await client.channels.cache.get("1265942101284356166");
        if(!channel) return;
        const row = new ActionRowBuilder();

        roles.forEach((role) =>{
            row.components.push(
                new ButtonBuilder()
                    .setCustomId(role.id)
                    .setLabel(role.label)
                    .setStyle(ButtonStyle.Success)
            )
        })
        await channel.send({
            content: "Pick (or remove) a role:",
            components: [row]
        });
        process.exit();
    }
    catch(error){
        console.log(error);
    }
});



client.login(Token);

