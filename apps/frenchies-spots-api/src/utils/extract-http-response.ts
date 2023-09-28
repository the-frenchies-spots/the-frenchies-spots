import { RequestResponse } from '../types';
import { plainToClass } from './plain-to-class';

export function extractHttpResponse<T>(httpValue: T) {
  const extractValue = plainToClass(httpValue, RequestResponse);
  console.log('=====================================');
  console.log({ extractValue });
  return JSON.parse(extractValue.res.text);
}
