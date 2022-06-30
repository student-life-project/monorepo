import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customEnum', async: false })
export class CustomEnum implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return text.length > 0 && args.constraints.find((e) => e[text] === text);
  }

  defaultMessage(args: ValidationArguments) {
    return `Text ${args} is not a valid option!`;
  }
}
