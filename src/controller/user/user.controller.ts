import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { check } from 'express-validator';
import { UsersService } from '../../services/users/users.service';
import { AuthGuard } from '@nestjs/passport';


import {UserDTO} from './userdto'

@Controller('user')
export class UserController {

    constructor(private userService: UsersService) {}

    @Post("register")
    register(@Body() userdto: UserDTO) {
        return this.userService.createUser(userdto);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
      return req.user;
    }
}
