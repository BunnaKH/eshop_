import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123456',10),
    isAdmin: true,
  },
  {
    name: "Jonh Doe",
    email: "jonhdoe@gmail.com",
    password: bcrypt.hashSync('123456',10),

  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    password:bcrypt.hashSync('123456',10),
   
  },
];

export default users;