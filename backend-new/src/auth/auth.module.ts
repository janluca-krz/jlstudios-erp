import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'MEIN_SUPER_SECRET', // später .env!
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}