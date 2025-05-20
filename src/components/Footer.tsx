
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-navy-dark">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="text-slate text-xs">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
