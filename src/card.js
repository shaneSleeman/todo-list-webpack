/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
const card = (name, done) => {
  const getName = () => name;
  const getDone = () => done;
  const changeDone = () => {
    done = !done;
  };
  return {
    getName, getDone, changeDone,
  };
};

export { card };
