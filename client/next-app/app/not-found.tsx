'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@heroui/button'

 
export default function NotFound() {
    const router = useRouter();

  return (
    <div className='h-[80vh] py-[300px] overflow-hidden bg-black'>
        <div className="container">
               <h1 className='text-center text-5xl mb-14'>
                    404 page not found
                </h1>
            <div className="flex items-center justify-center h-full">
             
                <div className="flex items-center">
                    <Button 
                        className='capitalize text-black '
                        size='lg' 
                        variant='shadow' 
                        color='warning' 
                        onClick={() => router.push('/')}
                        >
                            return home
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
