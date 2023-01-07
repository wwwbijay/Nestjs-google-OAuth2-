import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { userDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
    validateUser(details: userDetails) {


        console.log('AuthService');
        console.log(details);


    }
}
