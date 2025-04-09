import dbConnect from '@/lib/dbConnect';
import UserModel from '@/model/User';
import bcrypt from 'bcryptjs';

import { sendVerificationEmail } from '@/helpers/sendVerificationEmail';
import { string } from 'zod';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    const existingUserVerifiedByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    if (existingUserVerifiedByUsername) {
      return Response.json(
        { success: false, message: 'Username is already taken' },
        { status: 400 }
      );
    }

    const verifyCode = Math.floor(10000 + Math.random() * 90000).toString();

    const existingUserByEmail = await UserModel.findOne({ email });

    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return Response.json(
          {
            success: false,
            message: 'User already exits with this email',
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        existingUserByEmail.password = hashedPassword;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await existingUserByEmail.save();
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: Date,
        isVerified: false,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save();
    }

    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );

    if (emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: 'Username is already taken',
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: 'Userregistered successfully. Please verify your email',
      },

      { status: 201 }
    );
  } catch (error) {
    console.log('Error registering the user', error);
    return Response.json(
      {
        success: false,
        message: 'Error resgistering the user',
      },
      { status: 500 }
    );
  }
}
