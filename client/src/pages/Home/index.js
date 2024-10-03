import React, {useEffect} from 'react'
import { getCurrentUser } from '../../api/users';

const Home = () => {
  useEffect(() =>{
    console.log('home use effect');
    const fetchUser = async() => {
      const response = await getCurrentUser();
      console.log(response);
    };
    fetchUser();
  });
  return (
    <div>This is Home Page.</div>
  )
}

export default Home