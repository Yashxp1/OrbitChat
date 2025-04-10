import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';

interface signupData {
  name: string;
  username: string;
  password: string;
}

export const signup = async ({ name, username, password }: signupData) => {
  
  const existingUser = await prisma.user.findUnique({
    where: { username },
  });

  if (existingUser) {
    throw new Error('Username already taken');
  }

  const hashedPassword = await hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      username,
      password: hashedPassword,
    },
  });

  return {
    id: newUser.id,
    name: newUser.name,
    username: newUser.username,
    createdAt: newUser.createdAt,
  };
};
