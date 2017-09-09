import { UPDATE_USER_NAME } from "../actions/User";

const initialState = {
  username: ""
};

export default function UserReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_USER_NAME: {
      return Object.assign({}, state, {
        username: payload
      });
    }
    default: {
      return state;
    }
  }
}
