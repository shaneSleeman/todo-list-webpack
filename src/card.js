/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
const card = (name, priority, done) => {
  const getName = () => name;
  const getPriority = () => getPriority;
  const getDone = () => getDone;
  const changeDone = () => {
    done = !done;
  };
  return {
    getName, getPriority, getDone, changeDone,
  };
};

export { card };
