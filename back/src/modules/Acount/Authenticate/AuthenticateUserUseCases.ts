import {prisma} from "../../../database/prismaClient"
import {compare} from "bcrypt"
import {sign} from "jsonwebtoken"
import { JsonWebTokenError } from "jsonwebtoken";


interface IAuthenticateUser {
    username:string;
    password:string;
}

export class AuthenticateUserUseCase{
    async execute({username, password}: IAuthenticateUser){
        //Receber o username, password


        //Verificar se username cadastrado
        const user = await prisma.admin.findFirst({
            where:{
                username
            }
        })

        if(!user){
            throw new Error("Username or password invalid")
        }

        // verificar se a senha corresponde ao username
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Username or password invalid")
        }

        //gerar o token
        const token = sign({username}, "92424f46496f426dfsdf8752e76fabf28",{
            subject: user.id,
            expiresIn: "1d",
        })

        return {
            token
        }

    }


}