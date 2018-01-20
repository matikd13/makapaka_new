
const Discrod = require('discord.js');
const Commando = require('discord.js-commando');
const TOKEN = "NDAzNjQzMTQ3MzIzOTY1NDUx.DUKZEg.umcm2o3sBZ0reFJNXxxtRQ3ll3o";
const bot = new Discrod.Client();
const PREFIX = ";"

bot.on('ready', (xd) => {
    console.log(`${bot.user.tag} jest Gotowy na Krucjate!`);
    bot.user.setActivity('Biblię | Użyj: ;help', {type: "LISTENING"});
  })

bot.on("guildMemberAdd", function(member) {
    member.addRole(member.guild.roles.find("name", "gracz"));

});
bot.on('message', (message) => {

    if(message.content == 'a jak pan jezus powiedział'){
          message.channel.send('tak jak pan jezus powiedział');
    }
    else if(message.content == 'małe dzieci'){
             message.channel.send('a moża jak najbardziej, jeszcze jak');
       }
    else if(message.content == 'Czy ojciec święty łowił ryby na muche?'){
             message.channel.send('yyy co?');
    }
    else if(message.content == 'papież pijany albo niespełna rozumu'){
             message.channel.send('yyy co?');
    }
    else if(message.content == 'pan z wami'){
             message.channel.send('i z duchem twoim');
    }
    else if(message.content == "co tu sie odjaniepawla?"){
        message.channel.send('Ktoś mnie wołał?');
}
});

bot.on('message', function(message) {
    if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
//user
    switch (args[0].toLowerCase()){
        case "ping":
            message.channel.send("Pong!");
            break;
        case "info":
            message.channel.send("Papież niestety nie żyje");
            break;
        case "help":
            message.channel.send("Dostępne komendy:");
            message.channel.send(";info");
            break;
    }
/*admin
        switch(args[0].toLowerCase()){        
            case "say":
                if(args[1])
                {
                    for(var i=1; i<args.length;i++){
                        message.channel.send(args[i]);
                    }
                }else{
                    message.channel.send("Zły argument");
                }
        }*/
});
bot.login(TOKEN);