export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

export function updateUsername(nextUsername) {
  return {
    type: UPDATE_USER_NAME,
    payload: nextUsername
  };
}
