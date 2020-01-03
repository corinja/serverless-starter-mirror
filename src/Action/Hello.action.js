import {
  LambdaWrapper,
  DependencyInjection,
  ResponseModel,
  RequestService,
} from '@comicrelief/lambda-wrapper';

import CONFIGURATION, { DEFINITIONS } from '../Config/Configuration';

export default LambdaWrapper(CONFIGURATION, (di: DependencyInjection, request: RequestService, done) => {
  // Get a name from the query parameters.
  const name = request.get('name');
  const logger = di.get(DEFINITIONS.LOGGER);

  const response = new ResponseModel({
    response: name !== null ? `Hello ${name}` : 'Hello',
  }, 200, 'ok');

  logger.info('Log says Hello');

  done(null, response.generate());
});
