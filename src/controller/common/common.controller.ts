import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import {SharedService} from '../../services/shared/shared.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('common')
export class CommonController {

    constructor(private sharedServices : SharedService){}

    @Get()
    getCommon(): string {
        return "home"
    }

    @Get("about")
    getAbout(): string {
        return "about"
    }

    @Get("contact")
    getContact(): string {
        return "contact"
    }

    @Get("error")
    getError(): string {
        return "error"
    }

    @Post("send/mail")
    sendMail(): any {
        return this.sharedServices.sendMail()
    }
}
