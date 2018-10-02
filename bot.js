const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = ".";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split("#")[0];
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

client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});

client.on('message', message => {
if (message.content.startsWith("ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});

client.on("message", message => {
    var prefix = "##";
 if (message.content === "##help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
             Please Select Your Language
${prefix}help-ar
${prefix}help-en
             
      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
 if (message.content === "##help-ar") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
            اختر:
 
##help-gn-ar ⇏ اوامر عامة
##help-ad-ar ⇏ اوامر ادارة السيرفر
             
##help-mu-ar ⇏ اوامر الموسيقى
`)
message.channel.sendEmbed(embed)
 
}
});
 
client.on("message", message => {
    if (message.content === "##help-en") {
     const embed = new Discord.RichEmbed()  
         .setColor("RANDOM")
         .setDescription(`
         
              Chose:
               
   ##help-gn-en ⇏ General commands
   
   ##help-ad-en ⇏ Server management commands
               
   ##help-mu-en ⇏ Music commands
   
   
   `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "##";
 if (message.content === "##help-gn-ar") {
     message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
===================== اوامر عامة =====================
##id ➾ معلومات عن حسابك
##ping ➾ سرعة اتصالك بالانترنت
##avatar ➾ يظهر صورة بروفابلك
##server ➾ معلومات عن السيرفر
##bot ➾ معلومات عن البوت
##credit ➾ يظهرلك الكردت حقق
##daily ➾ يومية
##trans [@someone] [number] ➾ لتحويل كردت لشخص اخر
##count ➾ يعرضلك عدد الاشخاص الي بالسيرفر
##short ➾ يختصرلك الروابط
##say ➾ يكرر كلامك
##image ➾ صورة السيرفر
##contact ➾ لمراسله صاحب البوت
##invites ➾ يعرضلك عدد انفايتاتك بالسيرفر
##inv ➾ رابط اذخال البوت
##support ➾ سيرفر الدعم
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/QVHMcTb
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
 
 
 
 
   client.on("message", message => {
    var prefix = "##";
 if (message.content === "##help-gn-en") {
     message.channel.send('**Check your dm** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== General commands =====================
##id ➾ your informations
##ping ➾ your ping
##avatar ➾ your profile avatar
##server ➾ server informations
##bot ➾ bot informations
##credit ➾ your credits
##daily ➾ your daily credits
##trans [@mention] [number] ➾ to transfer credits for someone
##count ➾ server members without bots
##short ➾ shorten links
##say ➾ repeat your words
##image ➾ server image
##contact ➾ send text to bot owner
##invites ➾ to see your invites
##inv ➾ bot invite link
##support ➾ support server
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/QVHMcTb
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "##";
 if (message.content === "##help-ad-ar") {
     message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== اوامر ادارية =====================
##bc ➾ لارسال رساله لجميع الاعضاء
##ban [@mention] [reason] ➾  لحظر شخص من السيرفر
##kick [@mention] [reason] ➾ لطرد شخص من السيرفر
##mute [@mention] [reason] ➾ لاعطاء ميوت لعضو
##unmute [@mention] ➾ لفك الميوت عن عضو
##move [@mention] ➾ لنقل عضو لرومك الصوتي
##ccolors [number] ➾ لصنع عدد من الالوان
##mutechannel ➾ لاقفال الشات
##unmutechannel ➾ لفتح الشات
##clear ➾ لمسح الشات
##role humans [role name] ➾ لعطاء رتبة للاشخاص فقط
##role bots [role name] ➾ لاعطاء رتبة للبوتات فقط
##role [@mention] [role name] ➾ لاعطاء رتبة لعضو
##hchannel ➾ لاخفاء الشات
##schannel ➾ لاظهار الشات
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/QVHMcTb
`)
   message.author.sendEmbed(embed)
   
}
});
 
client.on("message", message => {
 var prefix = "##";
if (message.content === "##help-ad-en") {
  message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`
         
==================== Management commands =====================
##bc ➾ for massage send message to server members
##ban [@mention] [reason] ➾ to ban someone from the server
##kick [@mention] [reason] ➾ to kick someone from the server
##mute [@mention] [reason] ➾ to mute someone
##unmute [@mention] ➾ to umnute someone
##move [@mention] ➾ to move someone to your channel
##ccolors [number] ➾ to create colors
##mutechannel ➾ to mute chat
##unmutechannel ➾ to ummute chat
##clear ➾ to clear chat
##role humans [role name] ➾ to give role for humans only
##role bots [role name] ➾ to give role for bots only
##role [@mention] [role name] ➾ to give role fo someone
##hchannel ➾ to hide chat
##schannel ➾ to show chat
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/QVHMcTb
`)
message.author.sendEmbed(embed)
 
}
});
 
 
client.on("message", message => {
    var prefix = "##";
 if (message.content === "##help-mu-ar") {
     message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== اوامر الميوزك =====================
##play ➾ لتشغيل اغنية
##skip ➾ لتخطي اغنية
##pause ➾ لإيقآف الأغنية مؤقتا
##resume ➾ لتشغيل الاغننية
##vol ➾ لتغير مستوى الصوت 0 - 100
##stop ➾ لاخراج البوت من الروم
##np ➾ لمعرفة الاغنية مشغلة
##queue ➾ قائمة الاغاني
 
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/QVHMcTb
`)
   message.author.sendEmbed(embed)
   
}
});
 
 
client.on("message", message => {
    var prefix = "##";
 if (message.content === "##help-mu-en") {
     message.channel.send('**Check your dm** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
==================== Music commands =====================
##play ➾ to play song
##skip ➾ to skip song
##pause ➾ to pause the song
##resume ➾ To resume the song
##vol ➾ to change the volume 0 - 100
##stop ➾ top remove the bot from room
##np ➾ to show the song that is currently playing
##queue ➾ to see the song list
 
=========================================================
More codes soon
=========================================================
Support server : https://discord.gg/QVHMcTb
`)
   message.author.sendEmbed(embed)
   
}
});

client.login(process.env.BOT_TOKEN);
