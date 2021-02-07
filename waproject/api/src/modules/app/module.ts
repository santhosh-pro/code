import { HttpModule, Module } from '@nestjs/common';
import { CommonModule } from 'modules/common/module';
import { DatabaseModule } from 'modules/database/module';

import { AuthController } from './controllers/auth';
import { ProfileController } from './controllers/profile';
import { DeviceRepository } from './repositories/device';
import { UserRepository } from './repositories/user';
import { AuthService } from './services/auth';
import { UserService } from './services/user';
<<<<<<< HEAD

@Module({
  imports: [HttpModule, CommonModule, DatabaseModule],
  controllers: [AuthController, ProfileController],
  providers: [AuthService, UserService, UserRepository, DeviceRepository]
=======
import { CustomerModule } from 'modules/crm/module';
import { CustomerController } from 'modules/crm/controllers/customer';
import { CustomerRepository } from 'modules/crm/repositories/customer';
import { CustomerService } from 'modules/crm/services/customer';



@Module({
  imports: [ 
    HttpModule, 
    CommonModule, 
    DatabaseModule,
    CustomerModule
  ],
  controllers: [
    AuthController, 
    ProfileController,
    CustomerController
  ],
  providers: [  
    AuthService, 
    UserService, 
    UserRepository, 
    DeviceRepository,
    CustomerRepository,
    CustomerService
  ]
>>>>>>> 12453a9ceac485b936e95ac960e4848602eec2be
})
export class AppModule {}
