import regExpEsc from './regExpEsc';

let sensitivePattern: RegExp | undefined;
const zws = String.fromCharCode(8203);

/**
 * Cleans sensitive info from strings
 * @since 0.0.1
 * @param text The text to clean
 */
export function clean(text: string): string {
	if (typeof sensitivePattern === 'undefined') throw new Error('initClean must be called before running this.');
	return text.replace(sensitivePattern, '「ｒｅｄａｃｔｅｄ」').replace(/`/g, `\`${zws}`).replace(/@/g, `@${zws}`);
}

/**
 * Initializes the sensitive patterns for clean()
 * @param token The token to clean
 */
export function initClean(token: string): void {
	sensitivePattern = new RegExp(regExpEsc(token), 'gi');
}
