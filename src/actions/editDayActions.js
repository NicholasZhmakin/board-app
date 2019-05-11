export const editDay = (dayId, newDayName) => {
  return {
    type: "EDIT_DAY",
    dayId,
    newDayName
  };
};
