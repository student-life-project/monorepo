import { differenceInYears, parse } from 'date-fns';

export const calculateAge = (dob: string): number => {
  const date = parse(dob, 'yyyy-MM-dd', new Date());
  const age = differenceInYears(new Date(), date);
  return age;
};
