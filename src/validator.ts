type CustomValidatorFunction<T> = (value: T) => boolean;
export enum DateFormat {
    YMD_DASH = 'Y-m-d',
    YMD_SLASH = 'Y/m/d',
    YMD_DOT = 'Y.m.d',
    DMY_DASH = 'd-m-Y',
    DMY_SLASH = 'd/m/Y',
    DMY_DOT = 'd.m.Y',
    YM_SLASH = 'Y/m',
    YM_DASH = 'Y-m',
    YM_DOT = 'Y.m',
    MY_DASH = 'm-Y',
    MY_SLASH = 'm/Y',
    MY_DOT = 'm.Y'
}
export class Validator<T> {
    private readonly value: T;
    private rules: { check: (value: T) => boolean; message: string }[] = [];
    private optionalField = false;

    constructor(value: T) {
        this.value = value;
    }

    private getDefaultMessage(ruleName: string, defaultMessage: string | undefined): string {
        return defaultMessage || `Validation failed for ${ruleName}.`;
    }

    required(message?: string): this {
        this.rules.push({
            check: (value: T) => {
                if (typeof value === 'string') {
                    return value.trim() !== '';
                } else if (Array.isArray(value)) {
                    return value.length > 0;
                }
                return value !== null && value !== undefined;
            },
            message: this.getDefaultMessage('required', message),
        });
        return this;
    }

    optional(): this {
        this.optionalField = true;
        return this;
    }

    stringMax(maxLength: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'string' && value.length <= maxLength,
            message: this.getDefaultMessage('stringMax', message),
        });
        return this;
    }

    stringMin(minLength: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'string' && value.length >= minLength,
            message: this.getDefaultMessage('stringMin', message),
        });
        return this;
    }

    stringExact(exactLength: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'string' && value.length === exactLength,
            message: this.getDefaultMessage('stringExact', message),
        });
        return this;
    }

    numeric(message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'number' && !isNaN(value),
            message: this.getDefaultMessage('numeric', message),
        });
        return this;
    }

    numericMax(maxValue: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'number' && value <= maxValue,
            message: this.getDefaultMessage('numericMax', message),
        });
        return this;
    }

    numericMin(minValue: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'number' && value >= minValue,
            message: this.getDefaultMessage('numericMin', message),
        });
        return this;
    }

    numericExact(exactValue: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'number' && value === exactValue,
            message: this.getDefaultMessage('numericExact', message),
        });
        return this;
    }

    numericNumberExactNumberOfDigits(exactNumberOfDigits: number, message?: string): this {
        this.rules.push({
            check: (value: T) => typeof value === 'number' && value.toString().length === exactNumberOfDigits,
            message: this.getDefaultMessage('numericNumberExactNumberOfDigits', message),
        });
        return this;
    }

    password(message?: string): this {
        this.rules.push({
            check: (value: T) => {
                if (typeof value === 'string') {
                    // Add your password validation logic here (e.g., minimum length, capital letter, number, symbol)
                    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[\S]{8,}$/;
                    return passwordRegex.test(value);
                }
                return false;
            },
            message: this.getDefaultMessage('password', message),
        });
        return this;
    }


    dateFormat(format: DateFormat, message?: string): this {
        this.rules.push({
            check: (value: T) => {
                let dateRegex;
                if (typeof value === 'string') {
                    if (format === DateFormat.YMD_DASH) {
                        dateRegex = /^(?!0000)[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
                    } else if (format === DateFormat.YMD_DOT) {
                        dateRegex = /^(?!0000)[0-9]{4}\.(0[1-9]|1[0-2])\.(0[1-9]|[12][0-9]|3[01])$/;
                    } else if (format === DateFormat.YMD_SLASH) {
                        dateRegex = /^(?!0000)[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
                    } else if (format === DateFormat.DMY_DOT) {
                        dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(?!0000)[0-9]{4}$/;
                    } else if (format === DateFormat.DMY_SLASH) {
                        dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(?!0000)[0-9]{4}$/;
                    } else if (format === DateFormat.DMY_DASH) {
                        dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(?!0000)[0-9]{4}$/;
                    } else if (format === DateFormat.YM_DASH) {
                        dateRegex = /^(?!0000)[0-9]{4}-(0[1-9]|1[0-2])$/;
                    } else if (format === DateFormat.YM_SLASH) {
                        dateRegex = /^(?!0000)[0-9]{4}\/(0[1-9]|1[0-2])$/;
                    } else if (format === DateFormat.YM_DOT) {
                        dateRegex = /^(?!0000)[0-9]{4}\.(0[1-9]|1[0-2])$/;
                    } else if (format ===  DateFormat.MY_DASH) {
                        dateRegex = /^(0[1-9]|1[0-2])-(?!0000)[0-9]{4}$/;
                    } else if (format === DateFormat.MY_DOT) {
                        dateRegex = /^(0[1-9]|1[0-2])\.(?!0000)[0-9]{4}$/;
                    } else if (format === DateFormat.MY_SLASH) {
                        dateRegex = /^(0[1-9]|1[0-2])\/(?!0000)[0-9]{4}$/;
                    } else {
                        return false;
                    }
                    return dateRegex.test(value);

                }
                return false;
            },
            message: this.getDefaultMessage('dateFormat', message),
        });
        return this;
    }

    email(message?: string): this {
        this.rules.push({
            check: (value: T) => {
                if (typeof value === 'string') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(value);
                }
                return false;
            },
            message: this.getDefaultMessage('email', message),
        });
        return this;
    }

    arraySize(size: number, message?: string): this {
        this.rules.push({
            check: (value: T) => Array.isArray(value) && value.length === size,
            message: this.getDefaultMessage('arraySize', message),
        });
        return this;
    }

    custom(validatorFunction: CustomValidatorFunction<T>, message?: string): this {
        this.rules.push({
            check: (value: T) => validatorFunction(value),
            message: this.getDefaultMessage('custom', message),
        });
        return this;
    }

    sameAs(otherValue: T, message?: string): this {
        this.rules.push({
            check: (value: T) => {

                if(value === null && otherValue === null ){
                    return true
                }
                if (Array.isArray(value) && Array.isArray(otherValue)) {
                    return this.areArraysEqual(value, otherValue);
                }

                if (typeof value === 'object' && typeof otherValue === 'object') {
                    return this.areObjectsEqual(value as Record<string, any>, otherValue as Record<string, any>);
                }

                return value === otherValue;
            },
            message: this.getDefaultMessage('sameAs', message),
        });

        return this;
    }

    requiredIf(condition: boolean, message?: string): this {
        if (condition) {
            this.required();
            this.rules[this.rules.length - 1].message = this.getDefaultMessage('requiredIf', message);
        } else {
            this.optional();
        }

        return this;
    }

    greaterThan(compareValue: T, message?: string): this {
        this.rules.push({
            check: (value: T | undefined) => value !== undefined && value !== null && value > compareValue,
            message: this.getDefaultMessage('greaterThan', message),
        });
        return this;
    }

    greaterOrEqualThan(compareValue: T, message?: string): this {
        this.rules.push({
            check: (value: T | undefined) => value !== undefined && value !== null && value >= compareValue,
            message: this.getDefaultMessage('greaterOrEqualThan', message),
        });
        return this;
    }

    lessThan(compareValue: T, message?: string): this {
        this.rules.push({
            check: (value: T | undefined) => value !== undefined && value !== null && value < compareValue,
            message: this.getDefaultMessage('lessThan', message),
        });
        return this;
    }
    wholeNumber(message?: string): this {
        this.rules.push({
            check: (value: T) => {
                if (typeof value === 'string') {
                    const decimalRegex = /[.,]/;
                    return !decimalRegex.test(value) || /^\d+$/.test(value);
                } else if (typeof value === 'number') {
                    return Number.isInteger(value);
                }
                return true; // For other types, consider it as valid
            },
            message: this.getDefaultMessage('noDecimalPoints', message),
        });
        return this;
    }
    lessOrEqualThan(compareValue: T, message?: string): this {
        this.rules.push({
            check: (value: T | undefined) => value !== undefined && value !== null && value <= compareValue,
            message: this.getDefaultMessage('lessOrEqualThan', message),
        });
        return this;
    }

    dateGreaterThan(compareDate: string, message?: string): this {
        const parsedCompareDate = this.parseDate(compareDate);

        this.rules.push({
            check: (value: T | undefined) => {
                if (value !== undefined && value !== null && typeof value === 'string') {
                    const parsedValue = this.parseDate(value);
                    return parsedValue !== null && parsedCompareDate !== null && parsedValue > parsedCompareDate;
                }
                return false;
            },
            message: this.getDefaultMessage('dateGreaterThan', message),
        });
        return this;
    }

    dateLessThan(compareDate: string, message?: string): this {
        const parsedCompareDate = this.parseDate(compareDate);

        this.rules.push({
            check: (value: T | undefined) => {
                if (value !== undefined && value !== null && typeof value === 'string') {
                    const parsedValue = this.parseDate(value);
                    return parsedValue !== null && parsedCompareDate !== null && parsedValue < parsedCompareDate;
                }
                return false;
            },
            message: this.getDefaultMessage('dateLessThan', message),
        });
        return this;
    }


    private shouldSkipValidation(): boolean {
        return this.optionalField && (this.value === undefined || this.value === '' || this.value === null);
    }

    private clearOptionalFlag(): void {
        this.optionalField = false;
    }

    private parseDate(dateString: string): Date | null {
        const dateFormats = ['YYYY-MM-DD', 'YYYY/MM/DD', 'DD.MM.YYYY', 'DD/MM/YYYY'];
        for (const format of dateFormats) {
            const parsedDate = this.tryParseDate(dateString, format);
            if (parsedDate !== null) {
                return parsedDate;
            }
        }
        return null;
    }

    private tryParseDate(dateString: string, format: string): Date | null {
        const parts = dateString.split(/[\s\/.-]+/);
        const formatParts = format.split(/[\s\/.-]+/);
        const dateObj: { [key: string]: number } = {};

        if (parts.length !== formatParts.length) {
            return null;
        }

        for (let i = 0; i < formatParts.length; i++) {
            const formatPart = formatParts[i].toUpperCase();
            const value = parseInt(parts[i], 10);

            if (isNaN(value)) {
                return null;
            }

            dateObj[formatPart] = value;
        }

        return new Date(dateObj['YYYY'], dateObj['MM'] - 1, dateObj['DD']);
    }
    private areArraysEqual(arr1: any[], arr2: any[]): boolean {
        return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    }

    private areObjectsEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        return keys1.every((key) => obj1[key] === obj2[key]);
    }
    validate(): true | string {
        if (this.shouldSkipValidation()) {
            this.clearOptionalFlag();
            return true;
        }

        for (const rule of this.rules) {
            if (!rule.check(this.value)) {
                this.clearOptionalFlag();
                return rule.message;
            }
        }

        this.clearOptionalFlag();
        return true;
    }
}

