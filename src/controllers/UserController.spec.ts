import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe(" UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn()
  };
  const userController = new UserController(mockUserService as UserService);

  it("Deve add um novo usuario", () => {
    const mockRequest = {
        body: {
            name: 'Jammie',
            email: 'jammie@dio.me'
        }
    } as Request
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({message: 'usuário criado'})
    
  });
});
