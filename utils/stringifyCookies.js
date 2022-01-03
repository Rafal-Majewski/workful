const stringifyCookies = (cookies) => {
	return Object.entries(cookies).map(([name, value]) => {
		return `${name}=${value};`;
	}).join("\n");
};

module.exports = stringifyCookies;