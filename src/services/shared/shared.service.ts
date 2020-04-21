import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {

    sendMail(): string {
        return "mail sent";
    }
}
