const createArgParserFromSchema = () => ({
  getArgs: (argNames = []) => {
    if (argNames.length === 0) {
      throw new Error('Argument name must be provided');
    }
    if (argNames.length === 1) {
      throw new Error('Argument name is not in schema');
    }
    if (argNames.length > 1) {
      throw new Error('Argument names are not in schema');
    }
  },
});

export { createArgParserFromSchema };
