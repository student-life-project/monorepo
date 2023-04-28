import { TRootState } from '../reducers';

export const commentsSelector = (state: TRootState) => state.comments.comments;
