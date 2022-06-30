import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customEnumArray', async: false })
export class CustomEnumArray implements ValidatorConstraintInterface {
  validate(texts: string[], args: ValidationArguments) {
    return (
      texts.length > 0 &&
      texts.every((text) => args.constraints.find((e) => e[text] === text))
    );
  }

  defaultMessage(args: ValidationArguments) {
    return `Text ${args} is not a valid option!`;
  }
}
