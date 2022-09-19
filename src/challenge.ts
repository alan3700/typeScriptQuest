interface IUser {
    name:string;
    age:number;
}
let test:string='';
const prettyPrintWilder = (users:IUser[]):IUser[] => {
    return users.map((user:IUser) :any  => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  const wilders :IUser[] = [];
  const user1  = { name: "Pierre", age: 23 };
  const user2  = { name: "Paul", age:33 };
  const user3  = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);