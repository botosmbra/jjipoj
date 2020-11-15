module.exports = async (client) => {
  console.log(`[API] Logeado como ${client.user.username}`);
  await client.user.setActivity("a canciones guapisimas ("+process.env.PREFIX+"p)", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
