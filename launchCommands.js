process.env={
    "token":"MTE1NzA3NTk2NDQ4MDcyNTA2Mg.GRYzdl.ImAVyTUMreeHlWl-2iWZr81kaTResb2Lr9fKN0"
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST,Routes} = require('discord.js');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Check uptime stats'),
    //new SlashCommandBuilder().setName('search-miis').setDescription('Search for Miis on TheMiiMakers'),
    new SlashCommandBuilder().setName('create-mii').setDescription('Create a Mii straight from Discord'),
    new SlashCommandBuilder().setName('edit-mii').setDescription('Edit the Mii you were working on before')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.token);

rest.put(Routes.applicationCommands("1157075964480725062"), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);