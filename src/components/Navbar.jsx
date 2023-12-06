import React, { useState } from 'react';
import logo from '../logo.svg';
import search from '../image/Search.svg';
import cart from '../image/Cart.svg';
import account from '../image/Account.svg';
import Login from './Login';
import Modal from './Modal';

export default function Navbar () {
  const [isLoginVisible, setLoginVisible] = useState(false);

  const handleAccountClick = () => {
    setLoginVisible(true);  //login page visible
  };

  const handleLoginClose = () => {
    setLoginVisible(false);  //login page not visible
  }

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
        <img src={logo}/>
        </a>

        <div className='flex grid grid-cols-3 gap-4 '>
          <button className='opacity-50 overflow-hidden hover:opacity-100' >
              <img src={search} />
          </button>

          <button className='opacity-50 overflow-hidden hover:opacity-100' >
              <img src={cart} />
          </button>
  
          <button className='opacity-50 overflow-hidden hover:opacity-100' 
          onClick={handleAccountClick}>
              <img src={account} />
          </button>

          {isLoginVisible && (
            <Modal onClose={handleLoginClose}>
              <Login isVisible={isLoginVisible} onClose={handleLoginClose} />
            </Modal>
          )}

        </div>
      </div>
    </div>
  );
};