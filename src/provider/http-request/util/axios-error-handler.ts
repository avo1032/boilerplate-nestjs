import { BadRequestException, HttpException } from '@nestjs/common';

export const axiosErrorHandler = (error: any) => {
  if (error.response) {
    responseErrorHandler(error);
  } else if (error.request) {
    requestErrorHandler(error);
  } else {
    throw error;
  }
};

const responseErrorHandler = (error: any) => {
  throw new HttpException(
    error.response.data || 'Unknown error',
    error.response.status || 500,
  );
};

const requestErrorHandler = (error: any) => {
  throw new BadRequestException(error.message || 'Service is not available');
};
