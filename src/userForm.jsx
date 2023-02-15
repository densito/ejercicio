import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {User} from './user.class'

export const Userform = ({add}) => {

const nameRef = useRef('')
const lastNameRef = useRef('')

function addUser(e){
   e.preventDefault();
   const newUser = new User(
      nameRef.current.value,
      lastNameRef.current.value,
      true
   )
   add(newUser)
}

   return (
      <form onSubmit={addUser} className='d-flex justify-content-center align-items-center mb-4' >
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='User Name'/>
                <input ref={lastNameRef} id='inputlastName' type='text' className='form-control form-control-lg' required  placeholder='User Last Name'/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
        </form>
   );
}

Userform.propTypes = {
   add: PropTypes.func.isRequired
}

export default Userform;
