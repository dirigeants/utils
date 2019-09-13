/**
 * Turn a dotted path into a json object.
 * @param path The dotted path
 * @param value The value
 * @param obj The object to edit
 */
export default function makeObject(path: string, value: unknown, obj: Record<string, unknown> = {}): Record<string, unknown> {
	if (path.indexOf('.') === -1) {
		obj[path] = value;
	} else {
		const route = path.split('.');
		const lastKey = route.pop();
		let reference = obj;
		for (const key of route) {
			if (!reference[key]) reference[key] = {};
			reference = reference[key] as Record<string, unknown>;
		}
		reference[lastKey] = value;
	}
	return obj;
}
