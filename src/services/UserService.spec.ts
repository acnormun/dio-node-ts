import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("Deve add um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Ana", "ana@dio.me");
    expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb);
  });
});
