import { Request, Response } from "express";

const db = [
  {
    name: "Joana",
    email: "joana@dio.me",
  },
];

export class UserController {
  createUser = (request: Request, response: Response) => {
    const user= request.body;
    db.push(user)
    return response.status(201).json({ message: "usuário criado" });
    console.log(db);
    
  };
}
