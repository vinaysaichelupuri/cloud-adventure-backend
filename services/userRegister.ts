import { User } from "../models/userRegister";
export class UserService {
  async registerUser(firstName: string, lastName: string,imageURL:string) {
    const user = await User.findOne({ where: { firstName } });
    if (user) {
      return { status: 400, message: 'User already exists' };
    }
    await User.create({ firstName, lastName,imageURL });
    return { status: 200, message: 'Register successful' };
  }
  }
