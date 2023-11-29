import { expect, it , describe} from "vitest";
import { Validator, DateFormat } from "./validator";

describe('required', ()=> {
    it('should return true for non-empty string', ()=>{
        const validator = new Validator('hello');
        const result = validator.required().validate();
        expect(result).toBe(true);
    }),
        it('should return true for number',()=>{
            const validator = new Validator(555);
            const result = validator.required().validate();
            expect(result).toBe(true);
        })

    it('should return false for an empty string', () => {
        const validator = new Validator('');
        const result = validator.required().validate();
        expect(result).toBe('Validation failed for required.');
    });

    it('should return false if 0 is sent',()=>{
        const validator = new Validator(0);
        const result = validator.required().validate();
        expect(result).toBe(true);
    })


    it('should return false for null or undefined value', () => {
        const validator1 = new Validator(null);
        const result1 = validator1.required().validate();
        expect(result1).toBe('Validation failed for required.');

        const validator2 = new Validator(undefined);
        const result2 = validator2.required().validate();
        expect(result2).toBe('Validation failed for required.');
    });

    it('should return false for an empty array', () => {
        const validator = new Validator([]);
        const result = validator.required().validate();
        expect(result).toBe('Validation failed for required.');
    });

    it('should return true for a non-empty array', () => {
        const validator = new Validator([1, 2, 3]);
        const result = validator.required().validate();
        expect(result).toBe(true);
    });
})

describe('optional', ()=>{
    it('should return true if string is input', () => {
        const validator = new Validator('hello');
        validator.optional();
        expect(validator['optionalField']).toBe(true);
    });
    it('should return true if empty string is input', () => {
        const validator = new Validator('');
        validator.optional();
        expect(validator['optionalField']).toBe(true);
    });
    it('should return true if 0 is input', () => {
        const validator = new Validator(0);
        validator.optional();
        expect(validator['optionalField']).toBe(true);
    });
    it('should return true if null is input', () => {
        const validator = new Validator(null);
        validator.optional();
        expect(validator['optionalField']).toBe(true);
    });
    it('should return true if undefined is input', () => {
        const validator = new Validator(undefined);
        validator.optional();
        expect(validator['optionalField']).toBe(true);
    });
    it('should return true if [] array is input', () => {
        const validator = new Validator([]);
        validator.optional();
        expect(validator['optionalField']).toBe(true);
    });
})

describe('stringMax', () => {
    it('should return false if null is input', () => {
        const maxLength = 10;
        const validator = new Validator(null);
        validator.stringMax(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMax.');
    });
    it('should return false if undefined is input', () => {
        const maxLength = 10;
        const validator = new Validator(undefined);
        validator.stringMax(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMax.');
    });

    it('should return false if number is input', () => {
        const maxLength = 10;
        const validator = new Validator(21);
        validator.stringMax(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMax.');
    });


    it('should return true  if lower number of characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('nine char');
        validator.stringMax(maxLength);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should return true  if equal number of characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('ten char..');
        validator.stringMax(maxLength);
        const result = validator.validate();
        expect(result).toBe(true);
    });
    it('should return false  if more characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('moreThanTen');
        validator.stringMax(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMax.');
    });
})

describe('stringMin', () => {
    it('should return false if null is input', () => {
        const maxLength = 10;
        const validator = new Validator(null);
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMin.');
    });
    it('should return false if  array is input', () => {
        const maxLength = 10;
        const validator = new Validator([1, 2, 3]);
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMin.');
    });
    it('should return false if undefined is input', () => {
        const maxLength = 10;
        const validator = new Validator(undefined);
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMin.');
    });

    it('should return false if number is input', () => {
        const maxLength = 10;
        const validator = new Validator(21);
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMin.');
    });


    it('should return false  if lower number of characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('nine char');
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringMin.');
    });

    it('should return true  if equal number of characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('ten char..');
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe(true);
    });
    it('should return true  if more characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('moreThanTen');
        validator.stringMin(maxLength);
        const result = validator.validate();
        expect(result).toBe(true);
    });
})

describe('stringExact', () => {
    it('should return false if null is input', () => {
        const maxLength = 10;
        const validator = new Validator(null);
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringExact.');
    });
    it('should return false if  array is input', () => {
        const maxLength = 10;
        const validator = new Validator([1, 2, 3]);
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringExact.');
    });
    it('should return false if undefined is input', () => {
        const maxLength = 10;
        const validator = new Validator(undefined);
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringExact.');
    });

    it('should return false if number is input', () => {
        const maxLength = 10;
        const validator = new Validator(21);
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringExact.');
    });


    it('should return false  if lower number of characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('nine char');
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringExact.');
    });

    it('should return true  if equal number of characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('ten char..');
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe(true);
    });
    it('should return true  if equal number of characters is input (0)', () => {
        const maxLength = 0;
        const validator = new Validator('');
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe(true);
    });
    it('should return false  if more characters is input', () => {
        const maxLength = 10;
        const validator = new Validator('moreThanTen');
        validator.stringExact(maxLength);
        const result = validator.validate();
        expect(result).toBe('Validation failed for stringExact.');
    });

})

describe('numeric', () => {
    it('should yield tru for numeric values', () => {
        const validator = new Validator(42);
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for negative numeric values', () => {
        const validator = new Validator(-42);
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for zero', () => {
        const validator = new Validator(0);
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for string values', () => {
        const validator = new Validator('NotANumber');
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe('Validation failed for numeric.');
    });
    it('should fail validation for string values 2', () => {
        const validator = new Validator('123');
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe('Validation failed for numeric.');
    });
    it('should fail validation for null values', () => {
        const validator = new Validator(null);
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe('Validation failed for numeric.');
    });

    it('should fail validation for undefined values', () => {
        const validator = new Validator(undefined);
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe('Validation failed for numeric.');
    });

    it('should fail validation for array values', () => {
        const validator = new Validator([1,2,3]);
        validator.numeric();
        const result = validator.validate();
        expect(result).toBe('Validation failed for numeric.');
    });


});

describe('numericMax', () => {
    it('should yield tru for numeric values', () => {
        const maxNumber = 99;
        const validator = new Validator(42);
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for negative numeric values', () => {
        const maxNumber = 99;
        const validator = new Validator(-42);
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for zero', () => {
        const maxNumber = 99;
        const validator = new Validator(0);
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for string values', () => {
        const maxNumber = 99;
        const validator = new Validator('NotANumber');
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMax.');
    });
    it('should fail validation for string values 2', () => {
        const maxNumber = 99;
        const validator = new Validator('123');
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMax.');
    });
    it('should fail validation for null values', () => {
        const maxNumber = 99;
        const validator = new Validator(null);
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMax.');
    });

    it('should fail validation for undefined values', () => {
        const maxNumber = 99;
        const validator = new Validator(undefined);
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMax.');
    });

    it('should fail validation for array values', () => {
        const maxNumber = 99;
        const validator = new Validator([1,2,3]);
        validator.numericMax(maxNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMax.');
    });
    it('should pass validation for numeric values less than or equal to maxValue', () => {
        const maxValue = 100;
        const validator1 = new Validator(50);
        const result1 = validator1.numericMax(maxValue).validate();
        expect(result1).toBe(true);

        const validator2 = new Validator(100);
        const result2 = validator2.numericMax(maxValue).validate();
        expect(result2).toBe(true);
    });
    it('should fail validation for numeric values greater than maxValue', () => {
        const maxValue = 100;
        const validator = new Validator(150);
        const result = validator.numericMax(maxValue).validate();
        expect(result).toBe('Validation failed for numericMax.');
    });

})

describe('numericMin', () => {
    it('should yield tru for numeric values', () => {
        const minNumber = 99;
        const validator = new Validator(100);
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for negative numeric values', () => {
        const minNumber = -41;
        const validator = new Validator(-40);
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for zero', () => {
        const minNumber = 0;
        const validator = new Validator(0);
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for string values', () => {
        const minNumber = 99;
        const validator = new Validator('NotANumber');
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMin.');
    });
    it('should fail validation for string values 2', () => {
        const minNumber = 99;
        const validator = new Validator('123');
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMin.');
    });
    it('should fail validation for null values', () => {
        const minNumber = 99;
        const validator = new Validator(null);
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMin.');
    });

    it('should fail validation for undefined values', () => {
        const minNumber = 99;
        const validator = new Validator(undefined);
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMin.');
    });

    it('should fail validation for array values', () => {
        const minNumber = 99;
        const validator = new Validator([1,2,3]);
        validator.numericMin(minNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericMin.');
    });
    it('should pass validation for numeric values greater than or equal to minNumber', () => {
        const minNumber = 100;
        const validator1 = new Validator(150);
        const result1 = validator1.numericMin(minNumber).validate();
        expect(result1).toBe(true);

        const validator2 = new Validator(100);
        const result2 = validator2.numericMin(minNumber).validate();
        expect(result2).toBe(true);
    });
    it('should fail validation for numeric values less than minNumber', () => {
        const minNumber = 100;
        const validator = new Validator(50);
        const result = validator.numericMin(minNumber).validate();
        expect(result).toBe('Validation failed for numericMin.');
    });

})

describe('numericExact', () => {
    it('should yield true for numeric values', () => {
        const number = 99;
        const validator = new Validator(99);
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for negative numeric values', () => {
        const number = -41;
        const validator = new Validator(-41);
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for zero', () => {
        const number = 0;
        const validator = new Validator(0);
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for string values', () => {
        const number = 99;
        const validator = new Validator('NotANumber');
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericExact.');
    });
    it('should fail validation for string values 2', () => {
        const minNumber = 99;
        const validator = new Validator('123');
        validator.numericExact(minNumber);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericExact.');
    });
    it('should fail validation for null values', () => {
        const number = 99;
        const validator = new Validator(null);
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericExact.');
    });

    it('should fail validation for undefined values', () => {
        const number = 99;
        const validator = new Validator(undefined);
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericExact.');
    });

    it('should fail validation for array values', () => {
        const number = 99;
        const validator = new Validator([1,2,3]);
        validator.numericExact(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericExact.');
    });
    it('should pass validation for numeric values equal to number', () => {
        const number = 100;
        const validator = new Validator(100);
        const result = validator.numericExact(number).validate();
        expect(result).toBe(true);

    });
    it('should fail validation for numeric values less than minNumber', () => {
        const number = 100;
        const validator1 = new Validator(50);
        const result1 = validator1.numericExact(number).validate();

        const validator2 = new Validator(150);
        const result2 = validator2.numericExact(number).validate();

        expect(result1).toBe('Validation failed for numericExact.');
        expect(result2).toBe('Validation failed for numericExact.');

    });

})

describe('numericNumberExactNumberOfDigits', () => {


    it('should fail validation for string values', () => {
        const number = 99;
        const validator = new Validator('NotANumber');
        validator.numericNumberExactNumberOfDigits(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericNumberExactNumberOfDigits.');
    });
    it('should fail validation for string values 2', () => {
        const number = 99;
        const validator = new Validator('123');
        validator.numericNumberExactNumberOfDigits(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericNumberExactNumberOfDigits.');
    });
    it('should fail validation for null values', () => {
        const number = 99;
        const validator = new Validator(null);
        validator.numericNumberExactNumberOfDigits(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericNumberExactNumberOfDigits.');
    });

    it('should fail validation for undefined values', () => {
        const number = 99;
        const validator = new Validator(undefined);
        validator.numericNumberExactNumberOfDigits(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericNumberExactNumberOfDigits.');
    });

    it('should fail validation for array values', () => {
        const number = 99;
        const validator = new Validator([1,2,3]);
        validator.numericNumberExactNumberOfDigits(number);
        const result = validator.validate();
        expect(result).toBe('Validation failed for numericNumberExactNumberOfDigits.');
    });

    it('should add a rule for numeric values with exact number of digits', () => {
        const exactNumberOfDigits = 3;
        const validator = new Validator(123);
        validator.numericNumberExactNumberOfDigits(exactNumberOfDigits);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for numeric values with exact number of digits', () => {
        const exactNumberOfDigits = 4;
        const validator = new Validator(4567);
        const result = validator.numericNumberExactNumberOfDigits(exactNumberOfDigits).validate();
        expect(result).toBe(true);
    });

    it('should fail validation for numeric values with a different number of digits', () => {
        const exactNumberOfDigits = 3;
        const validator = new Validator(98765);
        const result = validator.numericNumberExactNumberOfDigits(exactNumberOfDigits).validate();
        expect(result).toBe('Validation failed for numericNumberExactNumberOfDigits.');
    });


})

describe('password', () => {
    it('should add a rule for password validation', () => {
        const validator = new Validator('StrongPwd123!');
        validator.password();
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a strong password', () => {
        const validator = new Validator('SecurePass123!');
        const result = validator.password().validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a weak password', () => {
        const validator = new Validator('WeakPwd');
        const result = validator.password().validate();
        expect(result).toBe('Validation failed for password.');
    });

    it('should fail validation for non-string values', () => {
        const validator1 = new Validator(123);
        const result1 = validator1.password().validate();
        expect(result1).toBe('Validation failed for password.');

        const validator2 = new Validator(['password']);
        const result2 = validator2.password().validate();
        expect(result2).toBe('Validation failed for password.');

        const validator3 = new Validator(null);
        const result3 = validator3.password().validate();
        expect(result3).toBe('Validation failed for password.');

        const validator4 = new Validator(undefined);
        const result4 = validator4.password().validate();
        expect(result4).toBe('Validation failed for password.');
    });

});

describe('dateFormat', () => {

    it('should pass validation for valid date with YMD_DASH format', () => {
        const validator = new Validator('2022-11-17');
        validator.dateFormat(DateFormat.YMD_DASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid year in YMD_DASH format', () => {
        const validator = new Validator('0000-11-17');
        validator.dateFormat(DateFormat.YMD_DASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in YMD_DASH format', () => {
        const validator = new Validator('2022-13-17');
        validator.dateFormat(DateFormat.YMD_DASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid day in YMD_DASH format', () => {
        const validator = new Validator('2022-11-32');
        validator.dateFormat(DateFormat.YMD_DASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in YMD_DASH format', () => {
        const validator = new Validator('2022-11-17T00:00:00');
        validator.dateFormat(DateFormat.YMD_DASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in YMD_DASH format', () => {
        const validator = new Validator('11-17-2022');
        validator.dateFormat(DateFormat.YMD_DASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });



    it('should fail validation for invalid date format', () => {
        const validator = new Validator('2022-11-17');
        const result = validator.dateFormat('invalid-format' as DateFormat).validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format 2', () => {
        const validator = new Validator('2022/11/17');
        const result = validator.dateFormat('invalid-format' as DateFormat).validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });
    it('should fail validation for invalid date format 3', () => {
        const validator = new Validator('17/11/2022');
        const result = validator.dateFormat('invalid-format' as DateFormat).validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for non-string values', () => {
        const validator1 = new Validator(123);
        const result1 = validator1.dateFormat(DateFormat.YMD_DASH).validate();
        expect(result1).toBe('Validation failed for dateFormat.');

        const validator2 = new Validator(['2022-11-17']);
        const result2 = validator2.dateFormat(DateFormat.YMD_DASH).validate();
        expect(result2).toBe('Validation failed for dateFormat.');

        const validator3 = new Validator(null);
        const result3 = validator3.dateFormat(DateFormat.YMD_DASH).validate();
        expect(result3).toBe('Validation failed for dateFormat.');

        const validator4 = new Validator(undefined);
        const result4 = validator4.dateFormat(DateFormat.YMD_DASH).validate();
        expect(result4).toBe('Validation failed for dateFormat.');
    });

    it('should pass validation for valid date with YMD_DOT format', () => {
        const validator = new Validator('2022.11.17');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in YMD_DOT format', () => {
        const validator = new Validator('0000.11.17');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in YMD_DOT format', () => {
        const validator = new Validator('2022.13.17');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid day in YMD_DOT format', () => {
        const validator = new Validator('2022.11.32');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in YMD_DOT format', () => {
        const validator = new Validator('2022.11.17T00:00:00');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in YMD_DOT format', () => {
        const validator = new Validator('11-17-2022');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should pass validation for valid date with DMY_DOT format', () => {
        const validator = new Validator('17.11.2022');
        validator.dateFormat(DateFormat.DMY_DOT);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in DMY_DOT format', () => {
        const validator = new Validator('17.11.0000');
        validator.dateFormat(DateFormat.DMY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in DMY_DOT format', () => {
        const validator = new Validator('17.13.2022');
        validator.dateFormat(DateFormat.DMY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid day in DMY_DOT format', () => {
        const validator = new Validator('32.11.2022');
        validator.dateFormat(DateFormat.DMY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in DMY_DOT format', () => {
        const validator = new Validator('17.11.2022T00:00:00');
        validator.dateFormat(DateFormat.DMY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in DMY_DOT format', () => {
        const validator = new Validator('11-17-2022');
        validator.dateFormat(DateFormat.DMY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });


    it('should pass validation for valid date with DMY_SLASH format', () => {
        const validator = new Validator('17/11/2022');
        validator.dateFormat(DateFormat.DMY_SLASH);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in DMY_SLASH format', () => {
        const validator = new Validator('17/11/0000');
        validator.dateFormat(DateFormat.DMY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in DMY_SLASH format', () => {
        const validator = new Validator('17/13/2022');
        validator.dateFormat(DateFormat.DMY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid day in DMY_SLASH format', () => {
        const validator = new Validator('32/11/2022');
        validator.dateFormat(DateFormat.DMY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in DMY_SLASH format', () => {
        const validator = new Validator('17/11/2022T00:00:00');
        validator.dateFormat(DateFormat.DMY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in DMY_SLASH format', () => {
        const validator = new Validator('11-17-2022');
        validator.dateFormat(DateFormat.DMY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should pass validation for valid date with MY_DOT format', () => {
        const validator = new Validator('11.2022');
        validator.dateFormat(DateFormat.MY_DOT);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in MY_DOT format', () => {
        const validator = new Validator('11.0000');
        validator.dateFormat(DateFormat.MY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in MY_DOT format', () => {
        const validator = new Validator('13.2022');
        validator.dateFormat(DateFormat.MY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in MY_DOT format', () => {
        const validator = new Validator('11.2022T00:00:00');
        validator.dateFormat(DateFormat.MY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in MY_DOT format', () => {
        const validator = new Validator('11-2022');
        validator.dateFormat(DateFormat.MY_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should pass validation for valid date with MY_SLASH format', () => {
        const validator = new Validator('11/2022');
        validator.dateFormat(DateFormat.MY_SLASH);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in MY_SLASH format', () => {
        const validator = new Validator('11/0000');
        validator.dateFormat(DateFormat.MY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in MY_SLASH format', () => {
        const validator = new Validator('13/2022');
        validator.dateFormat(DateFormat.MY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in MY_SLASH format', () => {
        const validator = new Validator('11/2022T00:00:00');
        validator.dateFormat(DateFormat.MY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in MY_SLASH format', () => {
        const validator = new Validator('11-2022');
        validator.dateFormat(DateFormat.MY_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should pass validation for valid date with YMD_DOT format', () => {
        const validator = new Validator('2022.11.17');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in YMD_DOT format', () => {
        const validator = new Validator('0000.11.17');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in YMD_DOT format', () => {
        const validator = new Validator('2022.13.17');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid day in YMD_DOT format', () => {
        const validator = new Validator('2022.11.32');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in YMD_DOT format', () => {
        const validator = new Validator('2022.11.17T00:00:00');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in YMD_DOT format', () => {
        const validator = new Validator('11-17-2022');
        validator.dateFormat(DateFormat.YMD_DOT);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should pass validation for valid date with YMD_SLASH format', () => {
        const validator = new Validator('2022/11/17');
        validator.dateFormat(DateFormat.YMD_SLASH);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for invalid year in YMD_SLASH format', () => {
        const validator = new Validator('0000/11/17');
        validator.dateFormat(DateFormat.YMD_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid month in YMD_SLASH format', () => {
        const validator = new Validator('2022/13/17');
        validator.dateFormat(DateFormat.YMD_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid day in YMD_SLASH format', () => {
        const validator = new Validator('2022/11/32');
        validator.dateFormat(DateFormat.YMD_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid characters in YMD_SLASH format', () => {
        const validator = new Validator('2022/11/17T00:00:00');
        validator.dateFormat(DateFormat.YMD_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });

    it('should fail validation for invalid date format in YMD_SLASH format', () => {
        const validator = new Validator('11-17-2022');
        validator.dateFormat(DateFormat.YMD_SLASH);
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateFormat.');
    });



})

describe('email', () => {
    it('should pass validation for a valid email address', () => {
        const validator = new Validator('test@example.com');
        validator.email();
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for an invalid email address', () => {
        const validator = new Validator('invalid-email');
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });


    it('should fail validation for an empty string', () => {
        const validator = new Validator('');
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for a string with spaces', () => {
        const validator = new Validator('test @example.com');
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for a string without "@" symbol', () => {
        const validator = new Validator('testexample.com');
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should pass validation for a valid email address with mixed case', () => {
        const validator = new Validator('Test@Example.com');
        validator.email();
        const result = validator.validate();
        expect(result).toBe(true);
    });


    it('should pass validation for a valid email address with special characters', () => {
        const validator = new Validator('user+name@domain.co.uk');
        validator.email();
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for an invalid email address with spaces', () => {
        const validator = new Validator('invalid email@example.com');
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for an invalid email address with a trailing comma', () => {
        const validator = new Validator('test@example,com');
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for a non-string value (number)', () => {
        const validator = new Validator(123);
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for a non-string value (undefined)', () => {
        const validator = new Validator(undefined);
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for a non-string value (null)', () => {
        const validator = new Validator(null);
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });

    it('should fail validation for a non-string value (array)', () => {
        const validator = new Validator([1, 2, 3]);
        validator.email();
        const result = validator.validate();
        expect(result).toBe('Validation failed for email.');
    });


});

describe('arraySize', () => {
    it('should pass validation for an array with the correct size', () => {
        const validator = new Validator([1, 2, 3, 4, 5]);
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for an array with the incorrect size', () => {
        const validator = new Validator([1, 2, 3]);
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for arraySize.');
    });

    it('should fail validation for a non-array value (number)', () => {
        const validator = new Validator(123);
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for arraySize.');
    });

    it('should fail validation for a non-array value (string)', () => {
        const validator = new Validator('test');
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for arraySize.');
    });

    it('should fail validation for a non-array value (object)', () => {
        const validator = new Validator({ key: 'value' });
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for arraySize.');
    });

    it('should fail validation for a non-array value (null)', () => {
        const validator = new Validator(null);
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for arraySize.');
    });
    it('should fail validation for a undefined value (undefined)', () => {
        const validator = new Validator(undefined);
        validator.arraySize(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for arraySize.');
    });

    it('should pass validation for an array with a different size', () => {
        const validator = new Validator(['a', 'b', 'c']);
        validator.arraySize(3);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for an empty array', () => {
        const validator = new Validator([]);
        validator.arraySize(0);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for an array with string values', () => {
        const validator = new Validator(['apple', 'banana', 'cherry']);
        validator.arraySize(3);
        const result = validator.validate();
        expect(result).toBe(true);
    });
})

type CustomValidatorFunction<T> = (value: T) => boolean;

describe('custom', () => {
    it('should pass validation for a custom function that always returns true', () => {
        const customFunction: CustomValidatorFunction<number> = () => true;
        const validator = new Validator(42);
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a custom function that always returns false', () => {
        const customFunction: CustomValidatorFunction<string> = () => false;
        const validator = new Validator('test');
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe('Validation failed for custom.');
    });

    it('should pass validation for a custom function validating string length', () => {
        const customFunction: CustomValidatorFunction<string> = (value) => value.length >= 5;
        const validator = new Validator('custom');
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a custom function validating number range', () => {
        const customFunction: CustomValidatorFunction<number> = (value) => value > 0 && value < 10;
        const validator = new Validator(15);
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe('Validation failed for custom.');
    });

    it('should pass validation for a custom function validating array length', () => {
        const customFunction: CustomValidatorFunction<number[]> = (value) => value.length === 3;
        const validator = new Validator([1, 2, 3]);
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a custom function validating null value', () => {
        const customFunction: CustomValidatorFunction<string | null> = (value) => value === null;
        const validator = new Validator(null);
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a custom function validating undefined value', () => {
        const customFunction: CustomValidatorFunction<number | undefined> = (value) => value !== undefined;
        const validator = new Validator(undefined);
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe('Validation failed for custom.');
    });

    it('should pass validation for a custom function validating array elements', () => {
        const customFunction: CustomValidatorFunction<number[]> = (value) => value.every((num) => num > 0);
        const validator = new Validator([1, 2, 3]);
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a custom function validating string format', () => {
        const customFunction: CustomValidatorFunction<string> = (value) => /^\d+$/.test(value);
        const validator = new Validator('test123');
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe('Validation failed for custom.');
    });

    it('should pass validation for a custom function validating object properties', () => {
        const customFunction: CustomValidatorFunction<{ name: string }> = (value) => value.name.length > 0;
        const validator = new Validator({ name: 'John' });
        validator.custom(customFunction);
        const result = validator.validate();
        expect(result).toBe(true);
    });
});

describe('sameAs', () => {
    it('should pass validation for two equal numbers', () => {
        const validator = new Validator(42);
        validator.sameAs(42);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for two different numbers', () => {
        const validator = new Validator(42);
        validator.sameAs(99);
        const result = validator.validate();
        expect(result).toBe('Validation failed for sameAs.');
    });

    it('should pass validation for two equal strings', () => {
        const validator = new Validator('test');
        validator.sameAs('test');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for two different strings', () => {
        const validator = new Validator('test');
        validator.sameAs('other');
        const result = validator.validate();
        expect(result).toBe('Validation failed for sameAs.');
    });

    it('should pass validation for two equal arrays', () => {
        const validator = new Validator([1, 2, 3]);
        validator.sameAs([1, 2, 3]);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for two different arrays', () => {
        const validator = new Validator([1, 2, 3]);
        validator.sameAs([4, 5, 6]);
        const result = validator.validate();
        expect(result).toBe('Validation failed for sameAs.');
    });

    it('should pass validation for two equal objects', () => {
        const validator = new Validator({ name: 'John', age: 30 });
        validator.sameAs({ name: 'John', age: 30 });
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for two different objects', () => {
        const validator = new Validator({ name: 'John', age: 30 });
        validator.sameAs({ name: 'Jane', age: 25 });
        const result = validator.validate();
        expect(result).toBe('Validation failed for sameAs.');
    });

    it('should pass validation for two equal null values', () => {
        const validator = new Validator(null);
        validator.sameAs(null);
        const result = validator.validate();
        expect(result).toBe(true);
    });


    it('should pass validation for two equal undefined values', () => {
        const validator = new Validator(undefined);
        validator.sameAs(undefined);
        const result = validator.validate();
        expect(result).toBe(true);
    });

});

describe('requiredIf', () => {
    it('should pass validation for a required field when condition is true', () => {
        const validator = new Validator(10);
        validator.requiredIf(true);
        const result = validator.validate();
        expect(result).toBe(true);
    });


    it('should fail validation when condition is true and field is empty', () => {
        const validator = new Validator('');
        validator.requiredIf(true);
        const result = validator.validate();
        expect(result).toBe('Validation failed for requiredIf.');
    });


    it('should fail validation when condition is true and field is null', () => {
        const validator = new Validator(null);
        validator.requiredIf(true);
        const result = validator.validate();
        expect(result).toBe('Validation failed for requiredIf.');
    });
    it('should fail validation when condition is true and field is undefined', () => {
        const validator = new Validator(undefined);
        validator.requiredIf(true);
        const result = validator.validate();
        expect(result).toBe('Validation failed for requiredIf.');
    });

    it('should fail validation when condition is true and field is []', () => {
        const validator = new Validator([]);
        validator.requiredIf(true);
        const result = validator.validate();
        expect(result).toBe('Validation failed for requiredIf.');
    });


    it('should pass validation when condition is false and field is empty', () => {
        const validator = new Validator('');
        validator.requiredIf(false);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a required field when condition is false and field is not empty', () => {
        const validator = new Validator('da');
        validator.requiredIf(false);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a required field when condition is false and field is number', () => {
        const validator = new Validator(99);
        validator.requiredIf(false);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a required field when condition is false and field is null', () => {
        const validator = new Validator(null);
        validator.requiredIf(false);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a required field when condition is false and field is []', () => {
        const validator = new Validator([]);
        validator.requiredIf(false);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a required field when condition is false and field is undefined', () => {
        const validator = new Validator(undefined);
        validator.requiredIf(false);
        const result = validator.validate();
        expect(result).toBe(true);
    });
});

describe('greaterThan', () => {
    it('should pass validation for a number greater than the compare value', () => {
        const validator = new Validator(8);
        validator.greaterThan(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a number equal to the compare value', () => {
        const validator = new Validator(5);
        validator.greaterThan(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for greaterThan.');
    });

    it('should fail validation for a number less than the compare value', () => {
        const validator = new Validator(3);
        validator.greaterThan(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for greaterThan.');
    });

    it('should fail validation for a string value', () => {
        const validator = new Validator('444');
        validator.greaterThan('55');
        const result = validator.validate();
        expect(result).toBe('Validation failed for greaterThan.');
    });

    // it('should fail validation for an undefined value', () => {
    //   const validator = new Validator(undefined);
    //   validator.greaterThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for greaterThan.');
    // });

    // it('should fail validation for a null value', () => {
    //   const validator = new Validator(null);
    //   validator.greaterThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for greaterThan.');
    // });

    // it('should fail validation for an array value', () => {
    //   const validator = new Validator([1, 2, 3]);
    //   validator.greaterThan(2);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for greaterThan.');
    // });

    it('should pass validation for a date greater than the compare value', () => {
        const validator = new Validator(new Date('2023-01-01'));
        validator.greaterThan(new Date('2022-01-01'));
        const result = validator.validate();
        expect(result).toBe(true);
    });
});

describe('greaterOrEqualThan', () => {
    it('should pass validation for a number greater than the compare value', () => {
        const validator = new Validator(8);
        validator.greaterOrEqualThan(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a number equal to the compare value', () => {
        const validator = new Validator(5);
        validator.greaterOrEqualThan(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a number less than the compare value', () => {
        const validator = new Validator(3);
        validator.greaterOrEqualThan(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for greaterOrEqualThan.');
    });


    // it('should fail validation for an undefined value', () => {
    //   const validator = new Validator(undefined);
    //   validator.greaterOrEqualThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for greaterOrEqualThan.');
    // });

    // it('should fail validation for a null value', () => {
    //   const validator = new Validator(null);
    //   validator.greaterOrEqualThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for greaterOrEqualThan.');
    // });

    // it('should fail validation for an array value', () => {
    //   const validator = new Validator([1, 2, 3]);
    //   validator.greaterOrEqualThan(2);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for greaterOrEqualThan.');
    // });

    it('should pass validation for a date greater than the compare value', () => {
        const validator = new Validator(new Date('2023-01-01'));
        validator.greaterOrEqualThan(new Date('2022-01-01'));
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a date equal to the compare value', () => {
        const validator = new Validator(new Date('2022-01-01'));
        validator.greaterOrEqualThan(new Date('2022-01-01'));
        const result = validator.validate();
        expect(result).toBe(true);
    });
});

describe('lessThan', () => {
    it('should pass validation for a number less than the compare value', () => {
        const validator = new Validator(3);
        validator.lessThan(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a number equal to the compare value', () => {
        const validator = new Validator(5);
        validator.lessThan(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for lessThan.');
    });

    it('should fail validation for a number greater than the compare value', () => {
        const validator = new Validator(8);
        validator.lessThan(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for lessThan.');
    });

    it('should fail validation for a string value', () => {
        const validator = new Validator('test');
        validator.lessThan('compare');
        const result = validator.validate();
        expect(result).toBe('Validation failed for lessThan.');
    });

    // it('should fail validation for an undefined value', () => {
    //   const validator = new Validator(undefined);
    //   validator.lessThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for lessThan.');
    // });

    // it('should fail validation for a null value', () => {
    //   const validator = new Validator(null);
    //   validator.lessThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for lessThan.');
    // });
    //
    // it('should fail validation for an array value', () => {
    //   const validator = new Validator([1, 2, 3]);
    //   validator.lessThan(2);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for lessThan.');
    // });

    it('should pass validation for a date less than the compare value', () => {
        const validator = new Validator(new Date('2022-01-01'));
        validator.lessThan(new Date('2023-01-01'));
        const result = validator.validate();
        expect(result).toBe(true);
    });
});

describe('lessOrEqualThan', () => {
    it('should pass validation for a number less than the compare value', () => {
        const validator = new Validator(3);
        validator.lessOrEqualThan(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a number equal to the compare value', () => {
        const validator = new Validator(5);
        validator.lessOrEqualThan(5);
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for a number greater than the compare value', () => {
        const validator = new Validator(8);
        validator.lessOrEqualThan(5);
        const result = validator.validate();
        expect(result).toBe('Validation failed for lessOrEqualThan.');
    });

    it('should fail validation for a string value', () => {
        const validator = new Validator('test');
        validator.lessOrEqualThan('compare');
        const result = validator.validate();
        expect(result).toBe('Validation failed for lessOrEqualThan.');
    });

    // it('should fail validation for an undefined value', () => {
    //   const validator = new Validator(undefined);
    //   validator.lessOrEqualThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for lessOrEqualThan.');
    // });

    // it('should fail validation for a null value', () => {
    //   const validator = new Validator(null);
    //   validator.lessOrEqualThan(5);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for lessOrEqualThan.');
    // });

    // it('should fail validation for an array value', () => {
    //   const validator = new Validator([1, 2, 3]);
    //   validator.lessOrEqualThan(2);
    //   const result = validator.validate();
    //   expect(result).toBe('Validation failed for lessOrEqualThan.');
    // });

    it('should pass validation for a date less than the compare value', () => {
        const validator = new Validator(new Date('2022-01-01'));
        validator.lessOrEqualThan(new Date('2023-01-01'));
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for a date equal to the compare value', () => {
        const validator = new Validator(new Date('2022-01-01'));
        validator.lessOrEqualThan(new Date('2022-01-01'));
        const result = validator.validate();
        expect(result).toBe(true);
    });
});

describe('dateGreaterThan', () => {
    it('should pass validation for date greater than compare date in dd.mm.yyyy format', () => {
        const validator = new Validator('15.11.2023');
        validator.dateGreaterThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for date equal to compare date in dd.mm.yyyy format', () => {
        const validator = new Validator('10.11.2023');
        validator.dateGreaterThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateGreaterThan.');
    });

    it('should fail validation for date less than compare date in dd.mm.yyyy format', () => {
        const validator = new Validator('05.11.2023');
        validator.dateGreaterThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateGreaterThan.');
    });



    it('should pass validation for date greater than compare date in dd.mm.yyyy format (different year)', () => {
        const validator = new Validator('15.11.2024');
        validator.dateGreaterThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for date greater than compare date in dd.mm.yyyy format (different month)', () => {
        const validator = new Validator('15.12.2023');
        validator.dateGreaterThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });



    it('should pass validation for date greater than compare date in dd.mm.yyyy format (leading zeros)', () => {
        const validator = new Validator('05.03.2023');
        validator.dateGreaterThan('01.03.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });



    it('should pass validation for date greater than compare date in dd.mm.yyyy format (different day)', () => {
        const validator = new Validator('15.11.2023');
        validator.dateGreaterThan('14.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for date equal to compare date in dd.mm.yyyy format', () => {
        const validator = new Validator('10.11.2023');
        validator.dateGreaterThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateGreaterThan.');
    });

    it('should fail validation for date less than compare date in dd.mm.yyyy format', () => {
        const validator = new Validator('10.11.2023');
        validator.dateGreaterThan('15.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateGreaterThan.');
    });


});

describe('dateLessThan',()=>{
    it('should pass validation for date less than compare date in DD.MM.YYYY format', () => {
        const validator = new Validator('10.11.2023');
        validator.dateLessThan('15.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for date equal to compare date in DD.MM.YYYY format', () => {
        const validator = new Validator('10.11.2023');
        validator.dateLessThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateLessThan.');
    });

    it('should fail validation for date greater than compare date in DD.MM.YYYY format', () => {
        const validator = new Validator('15.11.2023');
        validator.dateLessThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateLessThan.');
    });

    it('should pass validation for date less than compare date in DD.MM.YYYY format (different month)', () => {
        const validator = new Validator('10.10.2023');
        validator.dateLessThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for date less than compare date in DD.MM.YYYY format (different year)', () => {
        const validator = new Validator('10.11.2022');
        validator.dateLessThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should pass validation for date less than compare date in DD.MM.YYYY format (leading zeros)', () => {
        const validator = new Validator('01.01.2023');
        validator.dateLessThan('05.03.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for date equal to compare date in DD.MM.YYYY format (leading zeros)', () => {
        const validator = new Validator('01.01.2023');
        validator.dateLessThan('01.01.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateLessThan.');
    });

    it('should fail validation for date greater than compare date in DD.MM.YYYY format (leading zeros)', () => {
        const validator = new Validator('05.03.2023');
        validator.dateLessThan('01.03.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateLessThan.');
    });

    it('should pass validation for date less than compare date in DD.MM.YYYY format (different day)', () => {
        const validator = new Validator('14.11.2023');
        validator.dateLessThan('15.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

    it('should fail validation for date equal to compare date in DD.MM.YYYY format (different day)', () => {
        const validator = new Validator('15.11.2023');
        validator.dateLessThan('15.11.2023');
        const result = validator.validate();
        expect(result).toBe('Validation failed for dateLessThan.');
    });

    it('should pass validation for date less than compare date in DD.MM.YYYY format (different month and year)', () => {
        const validator = new Validator('10.10.2022');
        validator.dateLessThan('10.11.2023');
        const result = validator.validate();
        expect(result).toBe(true);
    });

})
