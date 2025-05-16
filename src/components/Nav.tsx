import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { SignOutButton } from '@clerk/nextjs'
import { Button } from './ui/button';


const Nav = () => {

  const user = true

  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-16 items-center justify-between'>
                <Link href="/" className='flex z-40 font-semibold'>
                Noti
                <span className='text-brand-700'>Cord</span>
                </Link>

                <div>
                    {user?
                    <>
                        <SignOutButton>
                            <Button>Sign out</Button>
                        </SignOutButton>
                    </>
                    : null
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Nav