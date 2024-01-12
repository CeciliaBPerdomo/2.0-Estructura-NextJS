import Image from 'next/image';
import React from 'react';

const Header = () => {
    // w-full: ocupa todo el ancho
    // py-6: padding en el eje y de 6
    return (
        <div>
            <header className="w-full bg-gray-600">
                <div className='container m-auto py-6 flex justify-between items-center'>
                    <p className='text-4xl text-bold text-slate-100'>
                        <Image 
                            src={"/coder.png"}
                            alt="CoderHouse-Logo"
                            width={200}
                            height={200}
                        />
                    </p>
                    <nav className='flex justify-between gap-2'>
                        <a href="" className='text-base text-slate-100 p-3'>Enlace 1</a>
                        <a href="" className='text-base text-slate-100 p-3'>Enlace 2</a>
                        <a href="" className='text-base text-slate-100 p-3'>Enlace 3</a>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default Header