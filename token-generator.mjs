import jwt from "jsonwebtoken";

export const generateToken = (cpf) => {
  return jwt.sign({ cpf }, process.env.SECRET_KEY, { expiresIn: "24h" });
};
