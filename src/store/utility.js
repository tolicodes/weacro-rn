export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});
export const updateList = (oldObject, oldListInObject, updatedProperties) => ({
  ...oldObject,
  lists: {
    ...oldListInObject,
    ...updatedProperties,
  },
});

export const addToInnerList = (existingInnerList, innerList, newItem) => {
  const outerList = {};
  outerList[innerList] = [...existingInnerList];
  outerList[innerList].push(newItem);
  return outerList;
};
export const makeNewList = (innerList, newItem) => {
  const outerList = {};
  outerList[innerList] = [];
  outerList[innerList].push(newItem);
  return outerList;
};
