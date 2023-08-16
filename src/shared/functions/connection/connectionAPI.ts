import axios, { AxiosRequestConfig } from 'axios';
import { MethodEnum } from '../../../enums/methods.enum';
import { getAuthorizationToken } from './auth';
import {
  ERROR_ACCESS_DANIED,
  ERROR_CONNECTION,
  ERROR_INVALID_PASSWORD,
} from '../../constants/errosConstants';

export type methodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionAPI {
  static async call<T, B = unknown>(url: string, method: methodType, body?: B): Promise<T> {
    const token = await getAuthorizationToken();

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    };

    switch (method) {
      case MethodEnum.DELETE:
      case MethodEnum.GET:
        return (await axios[method]<T>(url, config)).data;
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
      default:
        return (await axios[method]<T>(url, body, config)).data;
    }
  }

  static async connect<T, B = unknown>(url: string, method: methodType, body?: B): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DANIED);

          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_INVALID_PASSWORD);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};

export const connectionAPIPost = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};

export const connectionAPIPut = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};

export const connectionAPIPacth = async <T, B = unknown>(url: string, body: B): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};
