export const stateCommentsSelector = (state: any) => state.comments;

export const commentsSelector = (state: any) => state.comments.comments;

export const commentSelector = (state: any) => state.comments.comment;

export const isFetchingCommentsSelector = (state: any) =>
  state.comments.isFetching;

export const errorCommentsSelector = (state: any) => state.comments.error;
