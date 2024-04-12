/**
 *
 * @param obj {object} объект со значениями перечисления
 */
export function Enum(obj) {
	const newObj = {};

	for (const prop in obj)
		if (obj.hasOwnProperty(prop)) newObj[prop] = Symbol(obj[prop]);

	return Object.freeze(newObj);
}

/**
 *
 * @param obj {object} объект со значениями расширенного перечисления
 */
export function EnumExt(obj) {
	const newObj = {};

	for (const prop in obj)
		if (obj.hasOwnProperty(prop)) newObj[prop] = { ...obj[prop], id: Symbol(obj[prop].id.description) };

	return Object.freeze(newObj);
}
