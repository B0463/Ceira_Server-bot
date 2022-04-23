//init the bot.
const { Client, MessageEmbed } = require('discord.js');
const configFile = require("./config.json");
const cliente = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
const prefix = configFile.prefix;
const token = configFile.token;
cliente.login(token);
cliente.on("ready", () => {
    console.log("Ceira_Server loged.\n");
});
cliente.on("messageCreate", (msg) => {
    const autor = msg.author;
    const cont = msg.content;
    if(msg.author.bot == false) {
        if(cont.split(" ")[0]==prefix) {
            const embed = new MessageEmbed()
                .setColor('#00ffff')
                .setTitle('Bot_0463')
                .setDescription("Bot oficial do Ceira Server");
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"help") {
            const embed = new MessageEmbed()
                .setColor('#ffff00')
                .setTitle('help')
                .setDescription('comandos')
                .addFields(
                    { name: prefix+"", value: "comando padrão" },
                    { name: prefix+"help", value: "lista de comandos" },
                    { name: prefix+"rules", value: "regras do servidor" },
                    { name: prefix+"about", value: "sobre o servidor" },
                    { name: prefix+"ceira", value: "sinas" }
                )
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"rules") {
            const embed = new MessageEmbed()
                .setColor('#ffff00')
                .setDescription(
                    '```json\n'+
                    '"niveis": {\n'+
                    '  0: "aviso\n",'+
                    '  1: "castigo 20min - 1hora",\n'+
                    '  2: "castigo 1hora - 24horas",\n'+
                    '  3: "castigo 24horas - 7dias",\n'+
                    '  4: "kick",\n'+
                    '  5: "ban 24horas - 7dias",\n'+
                    '  6: "ban permanente"\n'+
                    '}\n'+
                    '```\n\n\n'+
                    '**1º**: Trate todos com respeito. Nenhum tipo de assédio, caça às bruxas, sexismo, racismo ou discurso de ódio será tolerado. **3-6**\n\n'+
                    '**2º**: É proibido fazer spam ou autopromoção (convites de servidor, anúncios, etc) sem permissão de um membro da equipe. Isso inclui mandar MDs para outros membros. **0-3**\n\n'+
                    '**3º**: Nada de conteúdo adulto ou obsceno. Isso inclui texto, imagens ou links que contenham nudez, sexo, violência pesada ou conteúdo graficamente perturbador. **4-6**\n\n'+
                    '**4º**: Se você vir algo que quebre as regras, ou algo que te faça sentir insegurança, avise a equipe. Queremos que este servidor seja um espaço acolhedor! **0-0**\n\n'+
                    '**5º**: evite marcar cargos administrativos de motivo. **0-1**\n\n'+
                    '**6º**: não estourar audio nos canais de voz e não usar moduladores de voz para vantagens. **0-2**\n\n'+
                    '**7º**: respeite a ToS (Termos de Serviço) do discord.** 0-6**\n\n'+
                    '**8º**: qualquer conteúdo relacionado a fobias mais comuns devem ser identificados e marcados como spoiler antes do envio.** 1-3**\n\n'+
                    '**9º**: Não alterar contexto para induzir a equipe a erro(s) ou endossar opinião. **1-3**\n\n'+
                    '**10º**: Proibido usar identidade de outro membro. 0-3\n\n'+
                    '**11º**: Proibido qualquer tipo de arquivos realcionados a hacks e malwares. qualquer um que ajude ou compactue é responsabilizado. **3-6**'
                );
            msg.channel.send({ embeds: [embed] });
	    } else if(cont.split(" ")[0]==prefix+"about") {
            const embed = new MessageEmbed()
                .setColor('#ffff00')
                .setDescription(
                    "o server tem **8** cargos de permições:\n\n"+
                    "**<@&933371053969932348> inicial\n"+
                    "<@&933371638802685962> primeiro\n"+
                    "<@&933372892949909554> segundo\n"+
                    "<@&933374385128112219> terceiro\n"+
                    "<@&933388516182855700> staff\n"+
                    "<@&933377417937043457> mod\n"+
                    "<@&933380998471757884> sub\n"+
                    "<@&933381324163670037> adm**\n\n"+
                    "para conseguir cargos de nivel, você precisa ganhar pontos com o bot \@Loritta.\n"+
                    "cada 1000 pontos é 1 level ou 1000pts = 1lv\n\n"+
                    "**<@&933371053969932348> 0pts\n"+
                    "<@&933371638802685962> 2lv\n"+
                    "<@&933383558322610296> 6lv\n"+
                    "<@&933384956330262558> 10lv\n"+
                    "<@&933372892949909554> 18lv\n"+
                    "<@&933385945292636160> 20lv\n"+
                    "<@&933386330979831870> 25lv\n"+
                    "<@&933497617780985886> 33lv\n"+
                    "<@&933374385128112219> 40lv**\n\n"+
                    "os cargos de **staff** são:\n\n"+
                    "**<@&933388516182855700> staff\n"+
                    "<@&933377417937043457> moderador\n"+
                    "<@&933496709290537021> moderador\n"+
                    "<@&933380998471757884> sub administrador\n"+
                    "<@&933381324163670037> administrador**\n\n"+
                    "para virar um *staff* tenque cumprir os seguintes requisitos:\n\n"+
                    "ter mais de **13 anos**\n"+
                    "estar no servidor a no minimo **1 semana**\n"+
                    "ser **ativo** no servidor\n"+
                    "fazer o **formulario https://forms.gle/HSoNqDLfnB7KFk5z8**\n\n"+
                    "para mais informações contate um @staff ou superior no **privado**."
                );
            msg.channel.send({ embeds: [embed] });
        } else if(cont.split(" ")[0]==prefix+"ceira") {
            const embed = new MessageEmbed()
                .setColor('#ffff00')
                .setTitle('sinas');
            msg.channel.send({ embeds: [embed] });
        }
    }
});
cliente.on("error", (error) => {
    console.log(`Discord.js Error: .\n${error}`);
});