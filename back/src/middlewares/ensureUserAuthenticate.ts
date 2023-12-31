import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
    sub: string
}

export async function  ensureAuthenticateUser (
    request: Request,
    response: Response,
    next: NextFunction) {
        const authHeader = request.headers.authorization;
        if(!authHeader){
            return response.status(401).json({
                message: "Token missing",
            });
        }

        const [,token] = authHeader.split(" ");

        try {
           const {sub}  = verify(token, "92424f46496f426dfsdf8752e76fabf28") as Ipayload
           console.log(sub)
           request.id_user = sub;
           return next();
        } catch (error) {
            return response.status(401).json({
                message: "Invalid token",
            
        })
    }
    
}