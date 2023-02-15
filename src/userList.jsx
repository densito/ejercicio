import React, {useState, useEffect} from 'react';
import {User} from './user.class'
import UserComponent from './components/user';
import {Userform} from './userForm'

const UserList = () => {
    
    const defaultUser = new User ('Edgar', 'Olmedo', true);
    const defaultUser2 = new User('Alan', 'Rolon', false);
    const defaultUser3 = new User('Roberto', 'Ibarra', true);


    const [users, setUsers] = useState([defaultUser, defaultUser2, defaultUser3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('User State has been modified')
        setLoading(false);
      
        return () => {
          console.log('User component is going to unmount')
        }
      }, [users])

    function connectedUser(user){
        console.log('The user is: ', user);
        const index = users.indexOf(user);
        const tempUser = [...users];
        tempUser[index].connected = !tempUser[index].connected;
        //se actualiza el estado del componente y se va a actualizar la iteracion de la tarea para mostrar la tarea actualizada
        setUsers(tempUser);
    }

    function deleteUser(user){
        console.log('The user deleted is: ', user);
        const index = users.indexOf(user);
        const tempUser = [...users];
        tempUser.splice(index,1);
        setUsers(tempUser)
    }

    function addUser(user){
        console.log('The user added is: ', user);
        const index = users.indexOf(user);
        const tempUser = [...users];
        tempUser.push(user);
        setUsers(tempUser);
    }


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Users:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              { users.map((user, index) => {
                                return(
                                  <UserComponent key={index} user={user} connected={connectedUser} remove={deleteUser} />
                                )
                              })}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <Userform add={addUser} />
        </div>
    );
}

export default UserList;
