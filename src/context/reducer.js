export const reducer = (state, { type, paylaod }) => {
  switch (type) {
    case "A":
      return { ...state };
    default:
      return state;
  }
};
