export const isValid = (cpf) => {
    if (!cpf) return false;
  
    cpf = cpf.replace(/[^\d]/g, "");
  
    if (cpf.length !== 11) {
      return false;
    }
  
    const firstDigit = cpf[0];
    if (cpf.split("").every((digit) => digit === firstDigit)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let sum = 0;
  
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
  
    const remainder = sum % 11;
    const firstCheckDigit = remainder < 2 ? 0 : 11 - remainder;
  
    // Verifica se o primeiro dígito verificador é válido
    if (parseInt(cpf[9]) !== firstCheckDigit) {
      return false;
    }
  
    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    const secondCheckDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
    // Verifica se o segundo dígito verificador é válido
    if (parseInt(cpf[10]) !== secondCheckDigit) {
      return false;
    }
  
    return true;
  };