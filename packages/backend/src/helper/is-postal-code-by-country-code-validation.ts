import {
  isPostalCode,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

// TODO fix validation
@ValidatorConstraint({ name: 'isPostalCodeByCountryCode', async: false })
export class IsPostalCodeByCountryCode implements ValidatorConstraintInterface {
  validate(zip: string, args: ValidationArguments) {
    // console.debug(args.object);
    // console.debug(args.object.countryCode);
    return isPostalCode(zip, args.object.countryCode);
  }

  defaultMessage(args: ValidationArguments) {
    return `Invalid zip "${args.object.zip}" for country "${args.object.countryCode}"`;
  }
}
