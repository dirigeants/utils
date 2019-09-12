const TOTITLECASE = /[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g;
const titleCaseVariants = {
	textchannel: 'TextChannel',
	voicechannel: 'VoiceChannel',
	categorychannel: 'CategoryChannel',
	guildmember: 'GuildMember'
};

/**
 * Converts a string to Title Case
 * @param str The string to title case
 */
export default function toTitleCase(str: string): string {
	return str.replace(TOTITLECASE, (txt) => titleCaseVariants[txt] || txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}