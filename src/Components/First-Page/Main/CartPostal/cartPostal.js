import React, { useEffect, useRef } from 'react';
import './cartPostal.css';

export default function CartPostal() {
  const user1Ref = useRef(null);
  const user2Ref = useRef(null);
  const user3Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === user1Ref.current) {
            startCounter(user1Ref.current, 595, 1);
          } else if (entry.target === user2Ref.current) {
            startCounter(user2Ref.current, 57, 40);
          } else if (entry.target === user3Ref.current) {
            startCounter(user3Ref.current, 23, 100);
          }
        }
      });
    }, options);

    if (user1Ref.current) observer.observe(user1Ref.current);
    if (user2Ref.current) observer.observe(user2Ref.current);
    if (user3Ref.current) observer.observe(user3Ref.current);

    return () => {
      if (user1Ref.current) observer.unobserve(user1Ref.current);
      if (user2Ref.current) observer.unobserve(user2Ref.current);
      if (user3Ref.current) observer.unobserve(user3Ref.current);
    };
  }, []);

  const startCounter = (element, max, interval) => {
    let seconds = 0;
    const counterInterval = setInterval(() => {
      if (seconds < max) {
        seconds++;
        element.innerHTML = seconds;
      } else {
        clearInterval(counterInterval);
      }
    }, interval);
  };

  return (
    <div className='CartPostalOrgDivParent'>
      <div className="CartPostalOrgDivChilde1">
        <h1>Users</h1>
        <div className='ContanetrUser1' ref={user1Ref}>0</div>
      </div>
      <div className="CartPostalOrgDivChilde2">
        <h1>Admin</h1>
        <div className='ContanetrUser2' ref={user2Ref}>0</div>
      </div>
      <div className="CartPostalOrgDivChilde3">
        <h1>Company</h1>
        <div className='ContanetrUser3' ref={user3Ref}>0</div>
      </div>
    </div>
  );
}

