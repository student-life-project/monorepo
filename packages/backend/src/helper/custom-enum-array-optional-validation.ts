import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customEnumArrayOptional', async: false })
export class CustomEnumArrayOptional implements ValidatorConstraintInterface {
  validate(texts: string[], args: ValidationArguments) {
    return (
      !texts.length ||
      texts.every((text) => args.constraints.find((e) => e[text] === text))
    );
  }

  defaultMessage(args: ValidationArguments) {
    return `Text ${args} is not a valid option!`;
  }
}
