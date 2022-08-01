export const isValidObjectFunction = (objectValues) => {
  // Retrieving All Object Values
  const values = Object.values(objectValues);
  // Checking if array is not empty means we found invalid Value So We Dont Try to send nonValid Request and load the server
  const isValid =
    values.filter((v) => v === "" || v === 0).length > 0 ? false : true;
  return isValid;
};

export const isValidDateFunction = (from, to) => {
  const fromDate = isNaN(Date.parse(from));
  const toDate = isNaN(Date.parse(to));

  if (fromDate || toDate) return false;
  return true;
};
