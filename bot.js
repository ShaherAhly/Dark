const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '.') {
        message.channel.send('**Welcome To Dark Server :cocktail:**')
      }
});

 client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "#";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});

client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "#";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



       client.on('message', message => {
if (message.content.startsWith("ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});

client.on('message', message => {
var prefix = "#";
        let reason = message.content.split(" ").slice(2).join(" ")
        let muterole = message.guild.roles.find("name", "muted")
        let men = message.mentions.users.first()

        if(message.content.startsWith(prefix + "mute")) {
            if(!men) return message.channel.send("**Do you want me to mute you 🤔 ?, please @mention someone. `Ex. #mute @xRokz bad boy`**");
            if(!reason) return message.channel.send("**Do you want me to mute " + men.username + " with no reason ?, `Ex. #mute @xRokz bad boy` or just use `none` for no reason **`")
            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

            }
            message.guild.member(men).addRole(muterole)
                message.channel.send("**" + men.username + " has been muted! :zipper_mouth:**")
        }

        if(message.content.startsWith(prefix + "unmute")) {
            if(!men) return message.channel.send("**please @mention someone. `Ex. #unmute <@!298732816995319809> bad boy`**");

            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

            }
            message.guild.member(men).removeRole(muterole)
                message.channel.send("**" + men.username + " has been unmuted! 😀 **")
        }
    })

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "dark")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***Welcome To Dark. ***')
.setThumbnail(member.avatarURL)
  .setImage('https://pa1.narvii.com/6782/6a39e35882b236f29965c9070bad5ce51f1dd01f_hq.gif')
        .setTimestamp()
        return wc.send(embed);
        
});



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Dark System.', 'https://cdn.discordapp.com/attachments/479077727002034176/489159001372885003/22cc8b50393fb6eea6d85e6139136e78.jpeg')

var channel =member.guild.channels.find('name', 'dark')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', '_ People,'));
});







client.login(process.env.BOT_TOKEN);
