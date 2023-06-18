const { QuickDB } = require("quick.db");
const db = new QuickDB();
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

class command {
    constructor() {
        this.name = "send",
        this.description = "» Owner"
          
            
    }
 
    

    async execute(bot, interaction) {
      //const user = interaction.options.getUser(`user`)
//if(process.env.id == interaction.user.id ) {
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('profil')
					.setLabel('Profil')
					.setStyle('PRIMARY')
)
			.addComponents(
				new MessageButton()
					.setCustomId('send')
					.setLabel('Envoyer')
					.setStyle('PRIMARY')
)
  			.addComponents(
				new MessageButton()
					.setCustomId('info')
					.setLabel('Information')
					.setStyle('PRIMARY')
)


        
			
  
const eHelp = new MessageEmbed()
    .setDescription(`_Cliquer sur un des boutons ci-dessous pour utiliser le bot_\n\`\`\` ・ Profil :\`\`\`Vous pouvez créer ou modifier votre profil. Une fois votre profil créer vous pouvez l’envoyer dans le channel correspond, Vous ne pouvez pas envoyé de demande à des personnes si votre profil n’existe pas.\n\`\`\`・ Envoyer : \`\`\`Vous pouvez envoyer votre profil 1x par jours.\n\`\`\` ・ Informations : \`\`\` Vous recevez un rapport de vos demande.`)
    .setColor("2f3136")
      interaction.channel.send({ embeds:[eHelp], components: [row] })
  
        

    }
}




module.exports = command
