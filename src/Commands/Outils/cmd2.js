const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

class command {
    constructor() {
        this.name = "hommesalon",
        this.description = "» Owner",
        this.options = [
        {
            name: 'salon',
            description: 'Salon que tu souhaite',
            type: 'CHANNEL',
            required: true
        }]
          
            
    }
 
    

    async execute(bot, interaction) {
      const user = interaction.options.getChannel(`salon`)
if(process.env.id == interaction.user.id ) {
  

        
			
  
const eHelp = new MessageEmbed()
    .setDescription(`_${user}_ a bien été ajouté salon homme.`)
    .setColor("2f3136")
      await db.set(`hommesalon_${interaction.guild.id}`, user.id).then(interaction.reply({ embeds:[eHelp]}))
  
        
  } else {
  const wl = new MessageEmbed()
    .setTitle(":x: Tu ne peux pas !")
    .setColor("2f3136")
  
  interaction.reply({embeds: [wl]})
  }
    }
}




module.exports = command
