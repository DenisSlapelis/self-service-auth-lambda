import { customResult } from "./custom-result.mjs";
import { isValid } from "./cpf-validation.mjs";
import { generateValidToken } from "./token-generator.mjs";

export const handler = async (event, _) => {
  const cpf = event?.queryStringParameters?.cpf;

  if (!cpf) {
    return customResult(400, "O parâmetro CPF é obrigatório");
  }

  const valid = isValid(cpf);

  if (!valid) {
    return customResult(400, "CPF inválido");
  }

  const token = generateValidToken(cpf);

  return customResult(200, { token });
};
