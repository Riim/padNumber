export function padNumber(num: number | string, length = 2) {
	return num.toString().padStart(length, '0');
}
