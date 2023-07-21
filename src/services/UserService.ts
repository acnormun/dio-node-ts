const db = [
    {
      name: "Joana",
      email: "joana@dio.me",
    },
  ];
  

export class UserService {
    createUser = (name:  string, email: string) => {
            const user = {
                name, email
            }

            db.push(user)

            console.log(db);
            
    }

    getAllUsers = () => {
        return db
    }
}