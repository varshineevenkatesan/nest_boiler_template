import { Injectable } from '@nestjs/common';
import {UserDTO} from '../../controller/user/userdto'  

export type User = any
@Injectable()
export class UsersService {

    private users: UserDTO[];

    constructor() {
        this.users = [
          {
            email: "john@abc.com",
            username: 'john',
            password: 'changeme',
          }
        ];
      }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    createUser(userDTO: UserDTO) {
      this.users.push(userDTO)
      return "Registration Successful"
    }
}
