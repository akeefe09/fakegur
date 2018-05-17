import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = ({ user, comments }) => {
  return {
    type: RECEIVE_USER,
    user,
    comments,
  };
};

const updateUser = ({ user }) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const fetchUser = (id) => (dispatch) => {
  return APIUtil.getUser(id).then(user => {
    return dispatch(receiveUser(user));
  });
};

export const editUser = (profile_pic_url, id) => dispatch => {
  return APIUtil.editUser(profile_pic_url, id).then(user => {
    return dispatch(updateUser(user));
  });
};

export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers().then(users => {
    return dispatch(receiveUsers(users));
  });
};
