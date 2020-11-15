const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "queue",
    description: "Muestra la lista actual de canciones",
    usage: "",
    aliases: ["q", "list", "songlist", "song-list"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("No hay nada en reproducción ahora mismo.", message.channel);

    let queue = new MessageEmbed()
    .setAuthor("Lista de Canciones", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
    .setColor("BLUE")
    .addField("Reproduciendo", serverQueue.songs[0].title, true)
    .addField("Canal de texto", serverQueue.textChannel, true)
    .addField("Canal de voz", serverQueue.voiceChannel, true)
    .setDescription(serverQueue.songs.map((song) => {
      if(song === serverQueue.songs[0])return
      return `**-** ${song.title}`
    }).join("\n"))
    //.setFooter("El volumen es "+serverQueue.volume)
    if(serverQueue.songs.length === 1)queue.setDescription(`No hay mas canciones en la lista, añadelas usando \`\`${client.config.prefix}p <nombre_canción>\`\``)
    message.channel.send(queue)
  },
};
