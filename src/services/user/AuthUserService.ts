import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken";

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

    //Se todas as validações estiverem corretas, gerar o token

    const token = sign(
      {
        name: User.name,
        email: User.email,
      },
      process.env.JWT_SECRET,
      {
        subject: User.id,
        expiresIn: "45d",
      }
    );

    return {
        id: User.id,
        name: User.name,
        email: User.email,
        token: token,
    };
  }
}

export { AuthUserService };
