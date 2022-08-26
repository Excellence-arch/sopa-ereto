const login = (status) => {
  return {
    type: 'STATUS',
    payload: status
  };
};

const logout = (stat) => {
  return {
    type: 'LOGOUT',
    payload: stat
  };
};

export { login, logout };
