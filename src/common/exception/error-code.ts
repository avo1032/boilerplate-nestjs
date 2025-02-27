import { HttpStatus } from '@nestjs/common';

export interface IErrorCode {
  errorCode: string;
  errorName: string;
  description: string;
  httpStatus: HttpStatus;
}

export type ErrorCodeType = keyof typeof ErrorCode;

export const ErrorCode = {
  SAMPLE_ERROR: {
    errorCode: '40001',
    errorName: 'Sample Error',
    description: () => `에러예시 입니다.`,
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  SAMPLE_ERROR_2: {
    errorCode: '40002',
    errorName: 'Sample Error 2',
    description: (detail = '') => `에러예시 입니다. ${detail}`,
    httpStatus: HttpStatus.BAD_REQUEST,
  },
};
