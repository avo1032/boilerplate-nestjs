import { HttpException } from '@nestjs/common';
import { ErrorCode, ErrorCodeType } from './error-code';

export class BusinessException extends HttpException {
  constructor(
    private readonly errorCode: ErrorCodeType,
    private readonly detail?: string,
  ) {
    const errorDefinition = ErrorCode[errorCode];
    super(
      {
        errorCode: errorDefinition.errorCode,
        errorName: errorDefinition.errorName,
        description: errorDefinition.description(detail),
      },
      errorDefinition.httpStatus,
    );
  }
}
