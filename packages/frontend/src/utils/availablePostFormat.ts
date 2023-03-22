import { IRentalPlace } from '@/types';

export const availablePostFormat = (data: IRentalPlace): IRentalPlace => {
  const newData = {
    ...data,
    ...data.address,
    availability: !data.availability,
    neighborhood: data.address.cologne,
  };

  delete newData._id;
  delete newData.likes;

  return newData;
};
