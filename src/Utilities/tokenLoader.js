exports.tokenLoader = () => {
  const token = localStorage.getItem("JWT");
  return token;
};
