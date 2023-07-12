import React from 'react';

import useAuthentication from '@config/useAuthentication';
import StacksUsers from '@routes/StacksUsers';
import StacksAuth from '@routes/StacksAuth';


const StacksApp = ()=>{

  const { user } = useAuthentication();
  
  if(user){
    console.log('users == true');
    return <StacksUsers/>
  }else{
    console.log('users == false');
    return <StacksAuth/>;
  }

}

export default StacksApp;