import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { userDetails } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
    async validateUser(details: userDetails) {
        console.log('AuthService');
        console.log(details);
        const user = await this.userRepository.findOneBy({ email: details.email });
        console.log(user);
        if (user) return user;
        console.log('User Not Found! Creating...');

        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser);


    }
}
