const zws = String.fromCharCode(8203);

interface Stringifiable {
	toString(): string;
}

/**
 * Makes a codeblock markup string
 * @since 0.0.1
 * @param lang The codeblock language
 * @param expression The expression to be wrapped in the codeblock
 */
export default function codeBlock(lang: string, expression: Stringifiable): string {
	return `\`\`\`${lang}\n${expression || zws}\`\`\``;
}