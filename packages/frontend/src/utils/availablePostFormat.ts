import { IRentalPlace } from '@/types';

const formatData = (data: IRentalPlace): IRentalPlace => {
  const newData = {
    ...data,
    ...data.address,
    neighborhood: data.address.cologne,
  };

  delete newData._id;
  delete newData.likes;

  return newData;
};

export const availablePostFormat = (data: IRentalPlace): IRentalPlace => ({
  ...formatData(data),
  availability: !data.availability,
});

export const approvalPostFormat = (data: IRentalPlace): IRentalPlace => ({
  ...formatData(data),
  approved: !data.approved,
});
