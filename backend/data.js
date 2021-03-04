import bcrypt from 'bcryptjs';


const data = {
    users: [
      {
        name: 'Alikhan',
        email: 'alikhan@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        
      },
      {
        name: 'Alistar',
        email: 'ilyassov@gmail.com',
        password: bcrypt.hashSync('1234', 8),
       
      },
    ]
};
export default data;

