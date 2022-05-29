var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
exports.default = {
    exec(msg, prefix) {
        const embed = embed_1.default.createEmbed({
            color: "#ffff00",
            description: ("o server tem **8** cargos de permições:\n\n" +
                "**<@&933371053969932348> inicial\n" +
                "<@&933371638802685962> primeiro\n" +
                "<@&933372892949909554> segundo\n" +
                "<@&933374385128112219> terceiro\n" +
                "<@&933388516182855700> staff\n" +
                "<@&933377417937043457> mod\n" +
                "<@&933380998471757884> sub\n" +
                "<@&933381324163670037> adm**\n\n" +
                "para conseguir cargos de nivel, você precisa ganhar pontos com o bot \@Loritta.\n" +
                "cada 1000 pontos é 1 level ou 1000pts = 1lv\n\n" +
                "**<@&933371053969932348> 0pts\n" +
                "<@&933371638802685962> 2lv\n" +
                "<@&933383558322610296> 6lv\n" +
                "<@&933384956330262558> 10lv\n" +
                "<@&933372892949909554> 18lv\n" +
                "<@&933385945292636160> 20lv\n" +
                "<@&933386330979831870> 25lv\n" +
                "<@&933497617780985886> 33lv\n" +
                "<@&933374385128112219> 40lv**\n\n" +
                "os cargos de **staff** são:\n\n" +
                "**<@&933388516182855700> staff\n" +
                "<@&933377417937043457> moderador\n" +
                "<@&933496709290537021> moderador\n" +
                "<@&933380998471757884> sub administrador\n" +
                "<@&933381324163670037> administrador**\n\n" +
                "para virar um *staff* tenque cumprir os seguintes requisitos:\n\n" +
                "ter mais de **13 anos**\n" +
                "estar no servidor a no minimo **1 semana**\n" +
                "ser **ativo** no servidor\n" +
                "fazer o **formulario https://forms.gle/HSoNqDLfnB7KFk5z8**\n\n" +
                "para mais informações contate um @staff ou superior no **privado**.")
        });
        msg.channel.send({ embeds: [embed] });
    }
};
