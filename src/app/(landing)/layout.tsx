import React, { ReactNode } from 'react';
import Nav from '../components/Nav';

const layout = ({children}:{children:ReactNode}) => {
  return (
    <>
      <Nav/>
      {children}
    </>
  )
}

export default layout