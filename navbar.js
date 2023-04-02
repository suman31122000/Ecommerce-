import react, { useState } from 'react';
import './navbar.css';
import {RiUser2Fill,RiShoppingBag2Line} from 'react-icons/ri';
import {SiDataiku} from 'react-icons/si';
import Modal from 'react-modal';
Modal.setAppElement('#root')
function Navbar(){
  const [modali,setmodali]=useState(false);

  const[modalii,setmodalii]=useState(false);
  return(
    <div className='navbar'>
     <div className='nheading'>
      <p><strong><SiDataiku color='orange' size='3rem' /></strong></p>
     </div>
     <div className='navitems'>
      <span>sumanbando3112200@gmail.com</span>
      <button className='btn' id='navbtn' onClick={()=>setmodali(true)}><RiUser2Fill color='orange' size='2rem'/></button>
      <Modal isOpen={modali} onRequestClose={()=>setmodali(false)}  className='mdl'>
        <h1>Hii User</h1>
        <p>Please Login</p>
        <label>Number:<input type='text' ></input></label>
        <label>Password:<input type='password' ></input></label>
        <button type='submit'>Sign in</button>
        
        <p>if you don't have an Account Please signup</p>
        <button  onClick={()=>setmodalii(true)}>Sign Up</button>
        <Modal isOpen={modalii} onRequestClose={()=>setmodalii(false)} className='mdl'>
          <h1>SIGN UP</h1>
          <p><label> Number</label>
          <input type='text'></input></p>
          <p><label> Name</label>
          <input type='text'></input></p>
          <p><label> Gmail</label>
          <input type='text'></input></p>
          <p><label> Password</label>
          <input type='password'></input></p>
          <p><label>Confirm Password</label>
          <input type='password'></input></p>
          <button type='submit'>signup</button>
        </Modal>
  
      </Modal>
      <button className='btn'id='navbtn'><RiShoppingBag2Line color='orange' size='2rem'/></button>
     </div>
    </div>
  )
}
export default Navbar;