import { isToday } from '@/utils';

export const avatarText = (value: string) => {
    if (!value) return '';
    const nameArray = value.split(' ');

    return nameArray.map((word) => word.charAt(0).toUpperCase()).join('');
};

// TODO: Try to implement this: https://twitter.com/fireship_dev/status/1565424801216311297
export const kFormatter = (num: number) => {
    const regex = /\B(?=(\d{3})+(?!\d))/g;

    return Math.abs(num) > 9999 ? `${Math.sign(num) * +(Math.abs(num) / 1000).toFixed(1)}k` : Math.abs(num).toFixed(0).replace(regex, ',');
};

/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Intl.DateTimeFormatOptions} formatting Intl object to format with
 */
export const formatDate = (
    value: string,
    formatting: Intl.DateTimeFormatOptions = { month: 'numeric', day: 'numeric', year: 'numeric' }
) => {
    if (!value) return value;

    return new Intl.DateTimeFormat('fr-FR', formatting).format(new Date(value));
};

/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */
export const formatDateToMonthShort = (value: string, toTimeForCurrentDay = true) => {
    const date = new Date(value);
    let formatting: Record<string, string> = { month: 'short', day: 'numeric' };

    if (toTimeForCurrentDay && isToday(date)) formatting = { hour: 'numeric', minute: 'numeric' };

    return new Intl.DateTimeFormat('fr-FR', formatting).format(new Date(value));
};
export const formatDateToMonthShortYear = (value: string) => {
    const formatting: Record<string, string> = { month: 'short', year: '2-digit' };

    //if (toTimeForCurrentDay && isToday(date)) formatting = { hour: 'numeric', minute: 'numeric' };

    return new Intl.DateTimeFormat('fr-FR', formatting).format(new Date(value));
};
export const formatDateToYear = (value: string) => {
    const formatting: Record<string, string> = { year: 'numeric' };

    //if (toTimeForCurrentDay && isToday(date)) formatting = { hour: 'numeric', minute: 'numeric' };

    return new Intl.DateTimeFormat('fr-FR', formatting).format(new Date(value));
};

export const formatAmount = (number: number, currency: string, local: string) => {
    return new Intl.NumberFormat(local || 'fr-FR', {
        style: 'currency',
        currency: currency || 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
};
