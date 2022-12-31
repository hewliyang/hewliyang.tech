export function getFormattedDate(
	date: string | number | Date,
	options: Intl.DateTimeFormatOptions = {},
	locale: Intl.LocalesArgument = "en-SG"
) {
	const formatOptions: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "long",
		year: "numeric",
		...options,
	};
	return new Date(date).toLocaleDateString(locale, formatOptions);
}
