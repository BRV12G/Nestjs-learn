export class UsersService{
    users: {id: number; name: string; email: string, gender: string, isMarried: boolean } [] = [
        {id : 1, name: 'John', email: 'john@gmail.com', gender: 'Male', isMarried: false},
        {id : 2, name: 'Jane Doe', email: 'jane@gmail.com', gender: 'Female', isMarried: true },
        {id : 3, name: 'Alex', email: 'alex@gmail.com', gender: 'Male', isMarried: false },
        {id : 4, name: 'Emily', email: 'emily@gmail.com', gender: 'Female', isMarried: true }
    ]
    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(user => user.id === id);
    }

    createUser(user: {id: number; name: string; email: string;  gender: string; isMarried: boolean }){
        this.users.push(user);
    }
}
