import {prisma} from "../../../database/prismaClient"
import {hash} from "bcrypt"

interface ICreateUser {
    username: string;
    password: string
}

export class CreateUserUseCase{
    async execute({password, username} : ICreateUser){
        // validar se o usuário existe
        const userExist = await prisma.admin.findFirst({
            where:{
                username:{
                    equals: username
                
                },
            },
        });

        if(userExist){
            throw new Error("Classifier man already exists")
        }

        //Criptografar a senha

        const hashPassword = await hash(password,10);


        //Salvar o client
       const user = await prisma.admin.create({
            data: {
                username,
                password: hashPassword,
            },
        })

        return user;
    }
}