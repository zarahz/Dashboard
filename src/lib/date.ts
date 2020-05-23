/* eslint-disable indent,import/prefer-default-export */

export function isSameDay(dateOne: Date, dateTwo: Date): boolean {
    return dateOne.getDate() === dateTwo.getDate()
        && dateOne.getMonth() === dateTwo.getMonth()
        && dateOne.getFullYear() === dateTwo.getFullYear();
}
