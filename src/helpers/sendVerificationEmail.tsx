import { resend } from '@/lib/resend';
import VerificationEmail from '../../emails/VerificationEmail';

import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'you@example.com',
      to: email,
      subject: 'Verification code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: 'Verification mail sent' };
  } catch (error) {
    console.log('Email error', error);
    return {
      success: false,
      message: 'failed to send verication email',
    };
  }
}
