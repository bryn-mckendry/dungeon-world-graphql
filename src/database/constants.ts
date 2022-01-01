import { RequestError } from './database.type';

export abstract class ErrorMessages {
  static readonly BAD_REQUEST: RequestError = { status: 400, message: 'Bad request.' };
  static readonly NOT_FOUND: RequestError = { status: 404, message: 'Resource not found.' };
  static readonly UNAUTHORIZED: RequestError = { status: 401, message: 'Unauthorized access.' };
}
