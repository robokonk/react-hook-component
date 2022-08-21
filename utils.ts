export const validateMMYY = (value: string) => {
  if (value.length !== 5) {
    return "Put correct data ->  MM/YY";
  }
  const [month, year] = value.split("/");
  if (Number(month) > 12) {
    return "Wrong month";
  }
  return true;
};
