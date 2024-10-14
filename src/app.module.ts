import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController],
})
export class AppModule {}
