const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

class command {
    constructor() {
        this.name = "femmesalon",
        this.description = "» Owner",
        this.options = [
        {
            name: 'salon',
            description: 'Salon que tu souhaite',
            type: 'CHANNEL',
            required: true
        }]
          
            
    }
 
    

    async execute(bot, config, interaction) {
      const user = interaction.options.getChannel(`salon`)
if(config.id == interaction.user.id ) {
  

        
			
  
const eHelp = new MessageEmbed()
    .setDescription(`_${user}_ a bien été ajouté salon femme.`)
    .setColor("2f3136")
      await db.set(`femmesalon_${interaction.guild.id}`, user.id).then(interaction.reply({ embeds:[eHelp]}))
  
        
  } else {
  const wl = new MessageEmbed()
    .setTitle(":x: Tu ne peux pas !")
    .setColor("2f3136")
  
  interaction.reply({embeds: [wl]})
  }
    }
}




module.exports = command
