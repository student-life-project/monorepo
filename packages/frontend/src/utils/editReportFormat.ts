import { IReport } from '@student_life/common';

export const isSolveReportFormat = (data: IReport): IReport => ({
  ...data,
  approved: !data.approved,
});
