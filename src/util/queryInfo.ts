const queryInfo = (query: string) => {
  const isZh = /[\u3400-\u9fa5]/.test(query);
  let word: null | string = null;

  if (!isZh) {
    if (query.split(" ").length === 1) {
      word = query;
    }
  }
  return { isZh, word };
};

export { queryInfo };
