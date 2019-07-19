import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {


   console.log('signin: ', isSignedIn);

   if (isSignedIn) {
       
      return(
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
         <p onClick={() => onRouteChange('SignIn')} className='f3 dim black underline pa3 pointer'>Sign out</p>
      </nav>
      );

   }

  

   else {

      return (

         <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
         <p onClick={() => onRouteChange('SignIn')} className='f3 dim black underline pa3 pointer'>SignIn</p>
            <p onClick={() => onRouteChange('Register')} className='f3 dim black underline pa3 pointer'>Register</p>
      </nav> );

}
}

export default Navigation;