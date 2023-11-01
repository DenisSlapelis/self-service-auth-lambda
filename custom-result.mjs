export const customResult = (statusCode, content) => {
  const bodyContent = statusCode < 399 ? {...content} : { error: content };

  return {
    statusCode,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bodyContent),
  };
};
