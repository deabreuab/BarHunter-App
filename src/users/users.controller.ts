import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
@Controller('users')
export class UsersController {
  // 👇 Ruta protegida
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
