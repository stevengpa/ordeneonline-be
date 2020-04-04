import {NextFunction, Request, Response} from 'express';
import { isEmpty } from 'lodash';

import UserProfile from '../../models/User/user.model';
import {IUserProfile} from '../../interfaces/User/IUserProfile.interface';

export default class UserController {

  private static async getProfileByQuery(query: object): Promise<IUserProfile | null> {
    console.log(`Search User Profile`);
    return await UserProfile.findOne(query) as IUserProfile | null;
  }

  private static async createUserProfile(profile: IUserProfile): Promise<string | any> {
    console.log(`Create User Profile`);
    const userProfile = new UserProfile(profile);
    const newProfile = await userProfile.collection.insertOne(profile);
    console.log(`User Profile Created`);
    return newProfile.insertedId;
  }

  async postUserProfile(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(`[POST] Create User Profile Init`);
      const userId = req.userId || '';
      const {name, phone, country, province, canton, district, address} = req.body;

      const profile: any = await UserController.getProfileByQuery({ userId });

      if (isEmpty(profile) && !isEmpty(userId)) {
        console.log('Profile not found');
        const newProfileId: string = await UserController.createUserProfile({userId, name, phone, country, province, canton, district, address});
        console.log('New User Profile ID ', newProfileId);
        return res.status(201).json({ id: newProfileId })
      } else {
        console.log('User Exists Profile ID ', profile._id);
        return res.status(201).json({ id: profile._id })
      }
    } catch (err) {
      throw next(err);
    }
  }

  getUser(req: Request, res: Response) {
    res.send('Hello');
  }
}