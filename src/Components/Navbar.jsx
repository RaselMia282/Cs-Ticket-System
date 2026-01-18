import React from 'react';

const Navbar = () => {
    return (
      <div className='flex justify-between mt-2 items-center shadow-2xl p-4'>
          <div className='flex justify-between items-center w-10/12 mx-auto '>
            <h1 className='font-bold'>CS — Ticket System</h1>
            <ul className='flex gap-5 '>
                <li><a href="">Home</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Changelog</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Download</a></li>
                <li><a href="">Contact</a></li>
                <button className='bg-purple-700 px-4 py-2 text-white rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>+ New Ticket</button>
            </ul>

        </div>
      </div>
    );
};

export default Navbar;
