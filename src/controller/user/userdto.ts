import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
  readonly email: string;
  readonly username: string;
  readonly password: string;
}