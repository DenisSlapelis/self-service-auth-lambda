import { customError } from "./custom-error.mjs";
import { isValid } from "./cpf-validation.mjs";
import { generateValidToken } from "./token-generator.mjs";

export const handler = async (event, _) => {
  const cpf = event?.queryStringParameters?.cpf;

  if (!cpf) {
    return customError(400, "O parâmetro CPF é obrigatório");
  }

  const valid = isValid(cpf);

  if (!valid) {
    return customError(400, " CPF inválido");
  }

  const token = generateValidToken(cpf);

  return {
    statusCode: 200,
    body: JSON.stringify({ token }),
  };
};
