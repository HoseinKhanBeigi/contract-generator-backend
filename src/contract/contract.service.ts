import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractService {
  getViewName(): string {
    return 'Hello World!';
  }
}
