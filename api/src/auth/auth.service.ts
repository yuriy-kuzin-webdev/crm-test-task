import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(): { access_token: string } {
    const payload = { sub: 'userId' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
