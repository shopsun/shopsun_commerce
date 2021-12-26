let tokenUser = '';

const handleToken = (state = tokenUser, action) => {
  const user = action.payload;
  switch (action.type) {
    case "ADDTOKENUSER":
      return tokenUser = user;
    default:
      return state;
  }
};

export default handleToken;
