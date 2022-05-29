import { Message } from "discord.js";
import embedG from "../functions/embed";
export default {
    exec(msg: Message, prefix: any) {
        const embed = embedG.createEmbed({
            color: "#ffff00",
            title: "help",
            description: "commands",
            filds: [
                { name: prefix+"", value: "default command" },
                { name: prefix+"help", value: "list of commands" },
                { name: prefix+"rules", value: "rules of server" },
                { name: prefix+"about", value: "about of server" },
                { name: prefix+"ceira", value: "sinas" },
                { name: prefix+"sinas", value: "ceira" }
            ]
        });
        msg.channel.send({ embeds: [embed] });
    }
};