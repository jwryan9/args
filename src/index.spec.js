import { createArgParserFromSchema } from './index';
import Chance from 'chance';

const chance = new Chance();

describe('createArgParserFromSchema', () => {
  describe('when arg parser created with empty schema and no arguments', () => {
    let argParser;

    beforeEach(() => {
      let schema = {};
      let args = [];

      argParser = createArgParserFromSchema(schema, args);
    });

    test('should create arg parser', () => {
      expect(argParser).toBeDefined();
    });

    test('arg parser should have getArgs function', () => {
      expect(argParser.getArgs).toBeInstanceOf(Function);
    });

    describe.each([
      [[], 'Argument name must be provided'],
      [chance.n(chance.word, chance.d6()), 'Argument name is not in schema'],
      [chance.n(chance.word, chance.d6()), 'Argument names are not in schema'],
    ])('when getArgs is called with %s', (argNames, expectedError) => {
      expect(() => {
        argParser.getArgs(argNames);
      }).toThrowError(expectedError);
    });
  });
});
