
# VALIDATOR

This document describes the validation methods. 
Each method has a specific role in data validation and can be used in different scenarios.

```
const validator = new Validator('some value');
const validationResult = validator.required().validate();
```


## TABLE OF CONTENTS

## Table of Contents
1. [Required](#required)
2. [Optional](#optional)
3. [String Max Length](#string-max-length)
4. [String Min Length](#string-min-length)
5. [String Exact Length](#string-exact-length)
6. [Numeric](#numeric)
7. [Numeric Max Value](#numeric-max-value)
8. [Numeric Min Value](#numeric-min-value)
9. [Numeric Exact Value](#numeric-exact-value)
10. [Numeric Number Exact Number of Digits](#numeric-number-exact-number-of-digits)
11. [Password](#password)
12. [Date Format](#date-format)
13. [Email](#email)
14. [Array Size](#array-size)
15. [Custom](#custom)
16. [Same As](#same-as)
17. [Required If](#required-if)
18. [Greater Than](#greater-than)
19. [Greater Or Equal Than](#greater-or-equal-than)
20. [Less Than](#less-than)
21. [Whole Number](#whole-number)
22. [Less Or Equal Than](#less-or-equal-than)
23. [Date Greater Than](#date-greater-than)
24. [Date Less Than](#date-less-than)
25. [Should Skip Validation](#should-skip-validation)
26. [Clear Optional Flag](#clear-optional-flag)
27. [Parse Date](#parse-date)
28. [Try Parse Date](#try-parse-date)
29. [Are Arrays Equal](#are-arrays-equal)
30. [Are Objects Equal](#are-objects-equal)



### Required
### `required(message?: string): this`
The required function validates that a given value is not empty. 
- For strings, it trims the value and checks if it's not an empty string.
- For arrays, it checks that the array contains at least one element.
- For all other types, it ensures that the value is neither null nor undefined.

Parameters:
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(name).required('Name is required!').validate();
```

```
const nameRules = [(name: string) => new Validator(name)
  .required('Name is required!')
  .validate()]
```

### Optional
### `optional(): this`
The optional function marks a field as optional for validation purposes. 
When this method is used, the field will not trigger validation errors if the value is null or undefined. 

Example:
```
const result = new Validator(name).optional().validate();
```


### String Max Length
### `stringMax(maxLength: number, message?: string): this`

The stringMax function validates that the length of a string does not exceed a specified maximum.
If the string’s length is greater than the provided maxLength, the validation will fail.

Parameters:
- maxLength (number): The maximum allowed length of the string.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(name).stringMax(10, 'Name is too long!').validate();
```

```
const nameRules = [(name: string) => new Validator(name)
  .required('Name is required!')
  .stringMax(10, 'Name is too long!')
  .validate()]
```

### String Min Length
### `stringMin(minLength: number, message?: string): this`

The stringMin function validates that the length of a string meets or exceeds a specified minimum. 
If the string’s length is less than the provided minLength, the validation will fail.

Parameters:

- minLength (number): The minimum required length of the string.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(name).stringMin(10, 'Name is too short!').validate();
```

```
const nameRules = [(name: string) => new Validator(name)
  .required('Name is required!')
  .stringMin(10, 'Name is too short!')
  .validate()]
```

### String Exact Length
### `stringExact(exactLength: number, message?: string): this`

The stringExact function validates that the length of a string is exactly equal to a specified length.
If the string’s length differs from the provided exactLength, the validation will fail.

Parameters:

- exactLength (number): The exact required length of the string.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(name).stringExact(10, 'Name has to contain exactly 10 characters!').validate();
```

```
const nameRules = [(name: string) => new Validator(name)
  .required('Name is required!')
  .stringExact(10, 'Name has to contain exactly 10 characters!')
  .validate()]
```

### Numeric
### `numeric(message?: string): this`

The numeric function validates that the value is a number. It checks whether the value is of type number and ensures that it is not NaN (Not a Number).

Parameters:

- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator('not a number').numeric('Not a number').validate();
console.log(result); // "Not a number"
```

```
const numberRules = [(age: number) => new Validator(age)
  .numeric('Not a number')
  .validate()]
```

### Numeric Max Value
### `numericMax(maxValue: number, message?: string): this`

The numericMax function validates that a number does not exceed a specified maximum value. If the number is greater than maxValue, the validation will fail.

Parameters:

- maxValue (number): The maximum allowed value for the number.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(15).numericMax(10, 'Number is too big!').validate();
console.log(result); // "Number is too big!"
```

### Numeric Min Value
### `numericMin(minValue: number, message?: string): this`

The numericMin function validates that a number is greater than or equal to a specified minimum value. If the number is less than minValue, the validation will fail.

Parameters:

- minValue (number): The minimum allowed value for the number.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(15).numericMin(10, 'Number is too small!').validate();
console.log(result); // "Number is too small!"
```

### Numeric Exact Value
### `numericExact(exactValue: number, message?: string): this`

The numericExact function validates that a number is exactly equal to a specified value. If the number differs from the provided exactValue, the validation will fail.

Parameters:

- exactValue (number): The exact value that the number must match.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(15).numericExact(10, 'Number is not 10!').validate();
console.log(result); // "Number is not 10!"
```

### Numeric Number Exact Number of Digits
### `numericNumberExactNumberOfDigits(exactNumberOfDigits: number, message?: string): this`

The numericNumberExactNumberOfDigits function validates that a number has exactly a specified number of digits. If the number's digit count differs from the provided exactNumberOfDigits, the validation will fail.


Parameters:

- exactNumberOfDigits (number): The exact number of digits that the number must have.
- message (optional, string): Custom error message if validation fails.

Example:
```
const result = new Validator(15).numericNumberExactNumberOfDigits(3, 'Number must have 3 digits!').validate();
console.log(result); // "Number must have 3 digits!"
```
### Password
### `password(message?: string): this`

The password function validates that a string meets specific criteria for a strong password. It checks if the password includes at least one uppercase letter, one number, one special character, and has a minimum length of eight characters.

Parameters:

- message (optional, string): Custom error message if validation fails.

```
const result = new Validator(password).password('Password is not correct!').validate();
console.log(result); // "Password is not correct!"
```
### Date Format
### `dateFormat(format: DateFormat, message?: string): this`

The dateFormat function validates that a string represents a date in a specified format. It supports various formats, such as YMD (Year-Month-Day), DMY (Day-Month-Year), and MY (Month-Year), with different separators (dash, dot, or slash).

Parameters:

- format (DateFormat): The format in which the date should be validated.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator('2024-10-24').dateFormat(DateFormat.YMD_DASH, 'Date is not correct!').validate();
console.log(result); // true
```

### Email
### `email(message?: string): this`

The email function validates that a string is in the format of a valid email address. It uses a regular expression to check if the string contains an '@' symbol, a domain name, and a top-level domain (TLD).

Parameters:

- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator('email!IN@bad.format').email('Email is not valid!').validate();
console.log(result); // "Email is not valid!"

```

### Array Size
### `arraySize(size: number, message?: string): this`

The arraySize function validates that an array has an exact number of elements. It checks whether the value is an array and verifies that its length matches the specified size.

Parameters:

- size (number): The exact number of elements the array must contain.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator([1, 2, 3]).arraySize(5, 'Array is not of good size!').validate();
console.log(result); // "Array is not of good size!"

```


### Custom
### `custom(validatorFunction: CustomValidatorFunction<T>, message?: string): this`

The custom function allows you to define a custom validation rule by providing a custom validator function. This function is called with the value being validated and should return true if the value is valid or false otherwise.

Parameters:

validatorFunction (CustomValidatorFunction<T>): A function that takes the value to be validated and returns a boolean indicating whether the value is valid.
message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator(5).custom(value => value > 10, 'Number has to be greater than 10').validate();
console.log(result); // "Number has to be greater than 10"

```



### Same As
### `sameAs(otherValue: T, message?: string): this`

The sameAs function validates that a value is equal to another specified value. This comparison supports different types of values, including arrays, objects, and primitive types. It also handles cases where both values are null.

This method checks if both values are equal, including:
- If both values are null, the validation passes.
- If both values are arrays, it checks for equality using a deep comparison.
- If both values are objects, it checks for equality using a deep comparison.
- For primitive types, it checks for direct equality.

Parameters:

- otherValue (T): The value to compare against.
- message (optional, string): Custom error message if validation fails.


Examples:

```
const result = new Validator('test').sameAs('test2', 'Not the same!').validate();
console.log(result); // "Not the same!"
```

### Required If
### `requiredIf(condition: boolean, message?: string): this`

The requiredIf function dynamically sets a field as required or optional based on the evaluation of a given condition. If the condition is true, the field is marked as required; otherwise, it is treated as optional.


Parameters:

- condition (boolean): A boolean value that determines whether the field should be required.
- message (optional, string): Custom error message if validation fails when the field is required.

Examples:

```
const result = validator.requiredIf(isUserAdult, 'This field is required if user is an adult.').validate();
console.log(result); "This field is required if user is an adult."
```

### Greater Than
### `greaterThan(compareValue: T, message?: string): this`

The greaterThan function validates that a given value is greater than a specified comparison value. This check ensures that the value is not undefined or null before performing the comparison.

Parameters:

- compareValue (T): The value to compare against.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator(5).greaterThan(10, 'Number has to be greater than 10').validate();
console.log(result); // "Number has to be greater than 10"
```


### Greater Or Equal Than
### `greaterOrEqualThan(compareValue: T, message?: string): this`

The greaterOrEqualThan function validates that a given value is greater than or equal to a specified comparison value. This check ensures that the value is not undefined or null before performing the comparison.

Parameters:

- compareValue (T): The value to compare against.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator(10).greaterOrEqualThan(10, 'Number has to be greater than 10').validate();
console.log(result); // true
```

### Less Than
### `lessThan(compareValue: T, message?: string): this`

The lessThan function validates that a given value is less than a specified comparison value. This check ensures that the value is not undefined or null before performing the comparison.

Parameters:

- compareValue (T): The value to compare against.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator(5).lessThan(10, 'Number has to be less than 10').validate();
console.log(result); // true
```

### Whole Number
### `wholeNumber(message?: string): this`

The wholeNumber function validates that a given value is a whole number, meaning it does not contain decimal points. The validation checks both string and numeric representations of the value.

- If the value is a string, it ensures that the string does not contain any decimal points (either . or ,) and checks if the remaining characters form a valid integer.
- If the value is a number, it checks whether the number is an integer using Number.isInteger().
- For other types, the validation is considered valid by default.

Parameters:

- message (optional, string): Custom error message if validation fails.

Examples:

```
const result = new Validator(5.5).wholeNumber('Must be an integer').validate();
console.log(result); "Must be an integer"
```


### Less Or Equal Than
### `lessOrEqualThan(compareValue: T, message?: string): this`

The lessOrEqualThan function validates that a given value is less than or equal to a specified comparison value. This check ensures that the value is not undefined or null before performing the comparison.

Parameters:

- compareValue (T): The value to compare against.
- message (optional, string): Custom error message if validation fails.

```
const result = new Validator(10).lessOrEqualThan(10, 'Number has to be less than 10').validate();
console.log(result); // true
```
### Date Greater Than
### `dateGreaterThan(compareDate: string, message?: string): this`

The dateGreaterThan function validates that a given date value is greater than a specified comparison date. The comparison is performed after parsing both the input date and the comparison date to ensure proper date handling.

- The function expects the compareDate to be a string that can be parsed into a valid date.
- If the input value is not undefined or null and is of type string, it attempts to parse it as a date.
- The validation will pass only if the parsed input date is greater than the parsed comparison date.

Parameters:

- compareDate (string): The date to compare against, provided as a string.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const validator = new Validator<string>('2024-10-25')
const result = validator.dateGreaterThan('2024-10-24', 'The date must be greater than the compare date.').validate();
console.log(result); 
```


### Date Less Than
### `dateLessThan(compareDate: string, message?: string): this`

The dateLessThan function validates that a given date value is less than a specified comparison date. This validation ensures that both the input date and the comparison date are properly parsed before performing the comparison.

- The function expects the compareDate to be a string that can be parsed into a valid date.
- If the input value is not undefined or null and is of type string, it attempts to parse it as a date.
- The validation will pass only if the parsed input date is earlier than the parsed comparison date.

Parameters:

- compareDate (string): The date to compare against, provided as a string.
- message (optional, string): Custom error message if validation fails.

Examples:

```
const validator = new Validator<string>('2024-10-25')
const result = validator.dateLessThan('2024-10-24', 'The date must be greater than the compare date.').validate();
console.log(result); 
```

### Should Skip Validation
### `private shouldSkipValidation(): boolean`


The shouldSkipValidation function determines whether the validation process should be skipped based on the state of the field being validated. It checks if the field is marked as optional and whether the current value is undefined, an empty string, or null.

- If the field is optional and the value is absent (i.e., undefined, '', or null), the function returns true, indicating that validation can be skipped.
- If the field is required or has a valid value, the function returns false, indicating that validation should proceed.

Returns:

- boolean: true if validation should be skipped; otherwise, false.


### Clear Optional Flag
### `private clearOptionalFlag(): void`

The clearOptionalFlag function resets the optional field flag to false. This indicates that the current field is no longer considered optional for validation purposes.

- This method is typically used to ensure that a field is treated as required, overriding any previous settings that may have marked it as optional.

Returns:

- void: This function does not return a value.
### Parse Date
### `private parseDate(dateString: string): Date | null`

The parseDate function attempts to parse a given date string into a Date object. It checks the string against multiple predefined date formats to determine if it can be successfully converted.

- The function iterates over an array of supported date formats, which include:
  - YYYY-MM-DD
  - YYYY/MM/DD
  - DD.MM.YYYY
  - DD/MM/YYYY
- For each format, it calls a helper function tryParseDate, which attempts to parse the date string according to the specified format.
- If a valid date is found, it returns the corresponding Date object. If none of the formats successfully parse the date, it returns null.

Parameters:

- dateString (string): The date string to be parsed.

Returns:

- Date | null: A Date object if the parsing is successful; otherwise, null.

### Try Parse Date
### `private tryParseDate(dateString: string, format: string): Date | null`

The tryParseDate function attempts to parse a date string according to a specified format and constructs a Date object if successful.

- It splits the dateString and the format into their respective parts based on delimiters (spaces, slashes, dots, or hyphens).
- The function checks if the number of parts in the date string matches the number of parts in the format. If they don't match, it returns null.
- For each part, it extracts the corresponding value and checks if it is a valid number. If any part is invalid (e.g., not a number), the function returns null.
- It then constructs an object mapping the format keys (YYYY, MM, DD) to their respective values.
- Finally, it returns a new Date object created from the parsed year, month (adjusted for zero-based indexing), and day.

Parameters:

- dateString (string): The date string to be parsed.
- format (string): The format string indicating how the date is structured.

Returns:

- Date | null: A Date object if parsing is successful; otherwise, null.

### Are Arrays Equal
### `private areArraysEqual(arr1: any[], arr2: any[]): boolean`

The areArraysEqual function checks whether two arrays are equal in length and content.

- It first compares the lengths of both arrays; if they are not equal, the function immediately returns false.
- If the lengths are equal, it uses the every method to iterate through the elements of the first array, comparing each element to the corresponding element in the second array by index.
- The function returns true only if all elements match; otherwise, it returns false.

Parameters:

- arr1 (any[]): The first array to compare.
- arr2 (any[]): The second array to compare.

Returns:

- boolean: Returns true if both arrays are equal in length and content; otherwise, returns false.

### Are Objects Equal
### `private areObjectsEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean`


The areObjectsEqual function checks whether two objects are equal based on their keys and corresponding values.

- It first retrieves the keys of both objects using Object.keys().
- If the lengths of the key arrays are not the same, the function returns false, indicating the objects are not equal.
- If the lengths match, it uses the every method to iterate through the keys of the first object, comparing the value of each key in obj1 to the corresponding value in obj2.
- The function returns true only if all keys and their values match; otherwise, it returns false.

Parameters:

- obj1 (Record<string, any>): The first object to compare.
- obj2 (Record<string, any>): The second object to compare.

Returns:

- boolean: Returns true if both objects are equal in keys and values; otherwise, returns false.

