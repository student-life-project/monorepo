// import {
//   isMobilePhone,
//   isPhoneNumber,
//   ValidationArguments,
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
// } from 'class-validator';

// // TODO fix validation
// @ValidatorConstraint({ name: 'isPhoneNumberByCountryCode', async: false })
// export class IsPhoneNumberByCountryCode
//   implements ValidatorConstraintInterface
// {
//   validate(phone: string, args: ValidationArguments) {
//     // @ts-ignore
//     return (
//       isMobilePhone(phone) || isPhoneNumber(phone, args.object.countryCode)
//     );
//   }

//   defaultMessage(args: ValidationArguments) {
//     // @ts-ignore
//     return `Invalid phone "${args.object.phone}" for country "${args.object.countryCode}"`;
//   }
// }
