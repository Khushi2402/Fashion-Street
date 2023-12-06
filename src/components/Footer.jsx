import React from "react";

import logo from '../../src/logo.svg';

export default function Footer () {
    return (
        <footer>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
    <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    )
}