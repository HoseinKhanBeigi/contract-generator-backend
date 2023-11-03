import { Get, Controller, Res, Render } from '@nestjs/common';
import { ContractService } from './contract.service';
import { Response } from 'express';

@Controller('contract')
export class ContractController {
  constructor(private contractService: ContractService) {}

  @Get()
  getHello() {
    return 'Hello, world!';
  }
}
