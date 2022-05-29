var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
exports.default = {
    exec(msg, prefix) {
        const embed = embed_1.default.createEmbed({
            color: "#ffff00",
            description: ('```json\n' +
                '"niveis": {\n' +
                '  0: "aviso"\n",' +
                '  1: "castigo 20min - 1hora",\n' +
                '  2: "castigo 1hora - 24horas",\n' +
                '  3: "castigo 24horas - 7dias",\n' +
                '  4: "kick",\n' +
                '  5: "ban 24horas - 7dias",\n' +
                '  6: "ban permanente"\n' +
                '}\n' +
                '```\n\n\n' +
                '**1º**: Trate todos com respeito. Nenhum tipo de assédio, caça às bruxas, sexismo, racismo ou discurso de ódio será tolerado. **3-6**\n\n' +
                '**2º**: É proibido fazer spam ou autopromoção (convites de servidor, anúncios, etc) sem permissão de um membro da equipe. Isso inclui mandar MDs para outros membros. **0-3**\n\n' +
                '**3º**: Nada de conteúdo adulto ou obsceno. Isso inclui texto, imagens ou links que contenham nudez, sexo, violência pesada ou conteúdo graficamente perturbador. **4-6**\n\n' +
                '**4º**: Se você vir algo que quebre as regras, ou algo que te faça sentir insegurança, avise a equipe. Queremos que este servidor seja um espaço acolhedor! **0-0**\n\n' +
                '**5º**: evite marcar cargos administrativos de motivo. **0-1**\n\n' +
                '**6º**: não estourar audio nos canais de voz e não usar moduladores de voz para vantagens. **0-2**\n\n' +
                '**7º**: respeite a ToS (Termos de Serviço) do discord.** 0-6**\n\n' +
                '**8º**: qualquer conteúdo relacionado a fobias mais comuns devem ser identificados e marcados como spoiler antes do envio.** 1-3**\n\n' +
                '**9º**: Não alterar contexto para induzir a equipe a erro(s) ou endossar opinião. **1-3**\n\n' +
                '**10º**: Proibido usar identidade de outro membro. 0-3\n\n' +
                '**11º**: Proibido qualquer tipo de arquivos realcionados a hacks e malwares. qualquer um que ajude ou compactue é responsabilizado. **3-6**')
        });
        msg.channel.send({ embeds: [embed] });
    }
};
