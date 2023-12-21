export const declinationOfNumber = (num: number, titles: string[]) => {
    let plural;
    plural = num % 10 === 1 && num % 100 !== 11 ? 0 : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? 1 : 2;
    switch (plural) {
        case 0:
            return titles[0];
        case 1:
            return titles[1];
        case 2:
            return titles[2];
    }
};
