import { Injectable } from '@nestjs/common';
import { TEST } from 'shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! => ' + TEST;
  }
}
