import { User } from '../models/userRegister';
import { UserService } from '../services/userRegister';
jest.mock('../models/userRegister');
const userService = new UserService();
describe('UserService', () => {
  describe('registerUser', () => {
    it('should return 400 if user with the same name already exists', async () => {
      (User.findOne as jest.Mock).mockResolvedValueOnce({ firstName: 'vinay' });
      const response = await userService.registerUser('vinay', 'sai', 'image.jpg',);
      expect(response.status).toBe(400); 
      expect(User.findOne).toHaveBeenCalledWith({ where: { firstName: 'vinay' } });
      expect(User.create).not.toHaveBeenCalled();
    });

    it('should return 200 when a new user is registered successfully', async () => {
      (User.findOne as jest.Mock).mockResolvedValueOnce(null);
      (User.create as jest.Mock).mockResolvedValueOnce({
        firstName: 'vinay',
        lastName: 'sai',
        imageURL: 'image.jpg',
      });

      const response = await userService.registerUser('vinay', 'sai','image.jpg');
      expect(response.status).toBe(200); 
      expect(User.findOne).toHaveBeenCalledWith({ where: { firstName: 'vinay' } });
      expect(User.create).toHaveBeenCalledWith({
        firstName: 'vinay',
        lastName: 'sai',
        imageURL: 'image.jpg',
      });
    });
  });
});