/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
const card = (name, priority, done) => {
  const getName = () => name;
  return { getName };
};

export { card };
