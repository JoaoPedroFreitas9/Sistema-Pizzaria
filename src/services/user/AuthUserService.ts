import prismaClient from "../../prisma";

import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Verificar se o email existe
    const User = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!User) {
      throw new Error("User/Senha incorretos");
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, User.password);

    if (!passwordMatch) {
      throw new Error("User/Senha incorretos");
    }

    return { ok: true };
  }
}

export { AuthUserService };
