import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 border-t">
            <div className='container m-auto py-2 text-sm text-gray-700 flex justify-between items-center'>
                <p>Desarrollado por Cecilia Perdomo 💛</p>

                <div className='flex items-center gap-2'>
                    <p>Powered by</p>
                    <Image
                        src={"/coder.png"}
                        width={50}
                        height={50}
                    />
                </div>
            </div>

        </footer>
    )
}

export default Footer