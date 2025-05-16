import React, { ReactNode } from 'react'

// {children:ReactNode} or PropsWithChildren is acceptable as type interface
const MockDiscordUI = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl'>
      
    </div>
  )
}

export default MockDiscordUI