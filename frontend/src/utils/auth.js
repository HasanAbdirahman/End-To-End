export const setUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const removeUser = () => {
  localStorage.removeItem('currentUser');
};

export const isAuthenticated = () => {
  return !!getUser();
};
