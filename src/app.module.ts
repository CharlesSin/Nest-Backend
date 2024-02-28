import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseController } from './expense/expense.controller';
import { ProjectsModule } from './projects/projects.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    ExpenseModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Classes middleware 的寫法
    consumer.apply(LoggerMiddleware).forRoutes(ExpenseController);
    // Functional middleware 的寫法
    // consumer.apply(logger).forRoutes(ExpenseController);
  }
}
