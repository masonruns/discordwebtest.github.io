const client = new Discord.Client();

client.on('message', msg => {
    const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]';
    const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : '';
    console.log(`${guildTag}${channelTag} ${msg.author.tag}: ${msg.content}`);
});

client.login('NzM3NDkwOTg1MTE4MDcyODYz.Xx-IAA.DdAD9eFitQ2IF98EggHWAB9VK2I');
