import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import {
  HttpDeleteRequest,
  HttpGetRequest,
  HttpPostRequest,
  HttpPutRequest,
} from '../type/http-request.type';
import { axiosErrorHandler } from '../util/axios-error-handler';

@Injectable()
export class SampleService {
  constructor(private readonly sampleServer: AxiosInstance) {}

  async get(data: HttpGetRequest) {
    try {
      return await this.sampleServer.get(data.path, data.config);
    } catch (error) {
      axiosErrorHandler(error);
    }
  }

  async post(data: HttpPostRequest) {
    try {
      return await this.sampleServer.post(data.path, data.data, data.config);
    } catch (error) {
      axiosErrorHandler(error);
    }
  }

  async put(data: HttpPutRequest) {
    try {
      return await this.sampleServer.put(data.path, data.data, data.config);
    } catch (error) {
      axiosErrorHandler(error);
    }
  }

  async delete(data: HttpDeleteRequest) {
    try {
      return await this.sampleServer.delete(data.path, data.config);
    } catch (error) {
      axiosErrorHandler(error);
    }
  }
}
