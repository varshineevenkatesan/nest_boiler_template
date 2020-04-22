import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { check } from 'express-validator';
import { UsersService } from '../../services/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { JwtService } from '@nestjs/jwt';


import {UserDTO} from './userdto'

@Controller('user')
export class UserController {

    constructor(private userService: UsersService, private authService: AuthService,  private jwtService: JwtService) {}

    @Post("register")
    register(@Body() userdto: UserDTO) {
        return this.userService.createUser(userdto);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
      // return this.authService.login(req.user);
      const payload = { username: "varshinee.venkatesan", sub: "example" };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

}
