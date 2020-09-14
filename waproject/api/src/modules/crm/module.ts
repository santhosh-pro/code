//import { HttpModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule, Module } from '@nestjs/common';
import { CommonModule } from 'modules/common/module';
import { DatabaseModule } from 'modules/database/module';

//import { AuthController } from './controllers/auth';
//import { TestController } from './controllers/test';
import { CustomerController } from './controllers/customer';
//import { RenewTokenMiddleware } from './middlewares/renewToken';
import { CustomerRepository } from './repositories/customer';
//import { AuthService } from './services/auth';
import { CustomerService } from './services/customer';

@Module({

	imports: [ HttpModule, CommonModule, DatabaseModule ],
	//controllers: [AuthController, UserController, TestController],
	controllers: [ CustomerController ],
	// providers: [AuthService, UserRepository, UserService]
	providers: [ CustomerRepository, CustomerService ]

})

export class CustomerModule {}