import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async login(email, password) {
        const user = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new NotFoundException("User not found!", { cause: new Error() });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new NotAcceptableException("Password is wrong!", { cause: new Error() });
        }

        return user.email;
    }

    async register(registerDto: RegisterDto) {

        const { email, username, password, repassword } = registerDto;

        const existingUser = await this.userModel.findOne({ email: email }).exec();
        if (existingUser) {
            throw new ConflictException("Username already exist!", { cause: new Error() });
        }

        if (password !== repassword) {
            throw new ConflictException("Confirmed password does not match", { cause: new Error() });
        }

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);

        return await new this.userModel({
            email: email,
            username: username,
            password: hash,
            createdAt: new Date()
        }).save();
    }
}