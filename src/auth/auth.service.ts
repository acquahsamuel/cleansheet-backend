import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) 
    private readonly authRepository: Repository<User>,
    private jwtService : JwtService,
  ) {}

  /**
   * Register a new user in the database with the given email and password.
   *
   * The password is hashed using `bcrypt.hash` with a cost of 10.
   *
   * Returns a promise that resolves to the newly created user.
   *
   * @param email The email of the user to register.
   * @param password The password of the user to register.
   */
  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.authRepository.create({
      email,
      password: hashedPassword,
    });
    return this.authRepository.save(user);
  }




  async login(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { email: user.email, sub: user.id };
      return {
        token: this.jwtService.sign(payload),
        message : 'Login successful',
      };
    }
    throw new BadRequestException('Invalid credentials');
  }


  async logout() {
    return { message: 'Logout successful' };
  }


  async refreshToken(oldToken : string) {
    const user = this.jwtService.verify(oldToken);  
 
    if (!user) {
    throw new BadRequestException('Invalid token');
  }
  
  const payload = { email: user.email, sub: user.sub }; 
  return {
    refresh_token: this.jwtService.sign(payload),
    message: 'Token refreshed successfully',
  };
  }


  async forgotPassword(email: string) {
    const user = await this.authRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const token = this.jwtService.sign({ email: user.email }, { expiresIn: '1h' });
    const resetLink = `http://yourapp.com/reset-password?token=${token}`;

    // await this.emailService.sendEmail(user.email, 'Reset Password', resetLink);

    return { message: 'Reset password link sent to your email' };
  }




  async resetPassword(token: string, newPassword: string) {
    const decoded = this.jwtService.verify(token);
    if (!decoded) {
      throw new BadRequestException('Invalid or expired token');
    }

    const user = await this.authRepository.findOne({ where: { email: decoded.email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await this.authRepository.save(user);
    return { message: 'Password reset successful' };

  }


  async verifyEmail(token: string) {
    const decoded = this.jwtService.verify(token);
    if (!decoded) {
      throw new BadRequestException('Invalid or expired token');
    }

    const user = await this.authRepository.findOne({ where: { email: decoded.email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.isVerified = true;
    await this.authRepository.save(user);
    return { message: 'Email verified successfully' };
  }




  async resendEmailVerification(email: string) {
    const user = await this.authRepository.findOne({ where: { email } });
    if (!user || user.isVerified) {
      throw new BadRequestException('User not found or already verified');
    }

    const token = this.jwtService.sign({ email: user.email }, { expiresIn: '1h' });
    const verificationLink = `http://yourapp.com/verify-email?token=${token}`;

    // await this.authRepository.sendEmail(user.email, 'Email Verification', verificationLink);
    return { message: 'Verification email resent' };
  }



  
  async getLoggedInUserProfile(id: number) {
    const user = await this.authRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }



 async updatePassword(){
    return { message: 'Password updated successfully' };
 }


  async findByEmail(email: string): Promise<User | undefined> {
    return await this.authRepository.findOne({ where: { email } });
  }
}
