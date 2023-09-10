const getURLQuery = (url: string, parameter: string): string => {
  const searchParams = new URLSearchParams(url?.substring(url.indexOf("?")));
  return searchParams.get(parameter) || "";
};

export { getURLQuery };
