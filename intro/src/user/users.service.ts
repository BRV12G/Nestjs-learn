export class UsersService{
    users: {id: number; name: string; age: number, gender: string, isMarried: boolean } [] = [
        {id : 1, name: 'John Doe', age: 30, gender: 'Male', isMarried: false},
        {id : 2, name: 'Jane Doe', age: 24, gender: 'Female', isMarried: true },
        {id : 3, name: 'Alex', age: 28, gender: 'Male', isMarried: false },
        {id : 4, name: 'Emily', age: 35, gender: 'Female', isMarried: true }
    ]
    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(user => user.id === id);
    }

    createUser(user: {id: number; name: string; age: number; gender: string; isMarried: boolean }){
        this.users.push(user);
    }
}
