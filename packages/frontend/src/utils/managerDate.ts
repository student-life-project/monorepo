import {
  addMinutes,
  differenceInYears,
  format,
  parse,
  subMinutes,
} from 'date-fns';
import es from 'date-fns/locale/es';

export const calculateAge = (dob: string): number => {
  const date = parse(dob, 'yyyy-MM-dd', new Date());
  const age = differenceInYears(new Date(), date);
  return age;
};

/** Transform local time (with offset) to UTC (no offset) */
export const getUTC = (date: Date): any => {
  const offset = date.getTimezoneOffset();

  return Math.sign(offset) !== -1
    ? addMinutes(date, offset)
    : subMinutes(date, Math.abs(offset));
};

export const formatDate = (
  date: Date,
  pattern = "dd 'de' MMMM 'de' yyyy",
): string => {
  return format(getUTC(new Date(date)), pattern, { locale: es });
};
