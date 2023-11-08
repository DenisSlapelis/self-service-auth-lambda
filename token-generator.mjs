import jwt from "jsonwebtoken";

export const generateValidToken = (cpf) => {
  return jwt.sign({ cpf }, process.env.SECRET_KEY, { expiresIn: "24h" });
};
