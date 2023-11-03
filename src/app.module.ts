import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ContractController } from './contract/contract.controller';
import { ContractService } from './contract/contract.service';

@Module({
  imports: [UserModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class AppModule {}
