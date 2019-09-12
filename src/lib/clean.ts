import regExpEsc from './regExpEsc';

let sensitivePattern;

/**
 * Cleans sensitive info from strings
 * @since 0.0.1
 * @param {string} text The text to clean
 * @returns {string}
 */
export function clean(text: string): string {
	return text.replace(sensitivePattern, '「ｒｅｄａｃｔｅｄ」').replace(/`/g, `\`${zws}`).replace(/@/g, `@${zws}`);
}

/**
 * Initializes the sensitive patterns for clean()
 * @param token The token to clean
 */
export function initClean(token: string): void {
	sensitivePattern = new RegExp(regExpEsc(token), 'gi');
}