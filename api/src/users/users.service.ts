import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async addUser(name: string, email: string, phone: string): Promise<User> {
    const user = new User({ name, email, phone });
    return user.save();
  }

  async getUserById(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
