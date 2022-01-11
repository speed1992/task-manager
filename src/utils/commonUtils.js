export const getDataFromLocalStorage = () => getValueFromLocalStorage("data");
export const setDataInLocalStorage = data => setValueInLocalStorage("data", data);

const getValueFromLocalStorage = (key) => {
  try {
    const item = JSON.parse(localStorage.getItem(key));
    return item;

  } catch (error) {
    console.log(error);
  }
};

const setValueInLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};