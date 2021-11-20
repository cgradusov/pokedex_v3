export const capitalizeString = (str: string) => str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

export const formatNumber = (str: string, len = 3) => ('0'.repeat(len - str.length) + str);
