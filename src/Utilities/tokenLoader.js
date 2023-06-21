export const tokenLoader = async () => {
  const token = localStorage.getItem("JWT");

  return token;
};
