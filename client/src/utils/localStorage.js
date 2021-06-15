export const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadData = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return undefined;
};
