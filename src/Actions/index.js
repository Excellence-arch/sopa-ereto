const login = (status) => {
  return {
    type: 'STATUS',
    payload: status
  };
};

const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export { login, logout };
