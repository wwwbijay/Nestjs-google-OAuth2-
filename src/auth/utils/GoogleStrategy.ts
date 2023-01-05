import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            clientID: '344732374401-8firmd1dhrdplv1cde9jqfbrpg09dued.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
    }
}