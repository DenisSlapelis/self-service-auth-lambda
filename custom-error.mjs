export const customError = (statusCode, message) => {
  return {
    statusCode,
    body: JSON.stringify({ error: message }),
  };
};
