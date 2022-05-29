var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = __importDefault(require("../functions/embed"));
exports.default = {
    exec(msg, prefix) {
        const embed = embed_1.default.createEmbed({
            color: "#ffff00",
            title: "help",
            description: "commands",
            filds: [
                { name: prefix + "", value: "default command" },
                { name: prefix + "help", value: "list of commands" },
                { name: prefix + "rules", value: "rules of server" },
                { name: prefix + "about", value: "about of server" },
                { name: prefix + "ceira", value: "sinas" },
                { name: prefix + "sinas", value: "ceira" }
            ]
        });
        msg.channel.send({ embeds: [embed] });
    }
};
