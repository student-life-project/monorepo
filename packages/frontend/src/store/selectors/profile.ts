export const stateProfileSelector = (state: any) => state.profile;

export const profileSelector = (state: any) => state.profile.profile;

export const isFetchingProfileSelector = (state: any) =>
  state.profile.isFetching;

export const errorProfileSelector = (state: any) => state.profile.error;
