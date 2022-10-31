import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IAuth0User } from '@student_life/common';
import { AuthenticationClient } from 'auth0';
import { Request } from 'express';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `${process.env.AUTH0_ISSUER_URL}`,
      algorithms: ['RS256'],
      passReqToCallback: true,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async validate(req: Request, payload: any): Promise<IAuth0User> {
    const authHeader = req.headers.authorization;
    const token = (authHeader || '').split('Bearer ')[1] || '';

    if (!token) {
      return payload;
    }

    const auth0 = new AuthenticationClient({
      domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
      clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
    });

    const userProfile = await auth0.getProfile(token);

    return {
      ...(payload as IAuth0User),
      ...userProfile,
    };
  }
}
