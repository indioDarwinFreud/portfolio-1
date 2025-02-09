"use client"

import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';


const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid intems-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
                <Image src="/home-4.png" priority width="800" height="800" alt="Profile pic" />

                <div className='flex flex-col justify-center max-w-md'>
                    <h1 className='mb-5 text-2x1 leading-tight text-center md:text-left
                    md:text-4xl md:mb-10'
                    >Si podés pensarlo,
                        <TypeAnimation

                            sequence={[
                                "podés programarlo",
                                1000,
                                "podés optimizarlo",
                                1000,
                                "podés implementarlo",
                                1000,
                                "podés desarrollarlo",
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='block font-bold text-secondary'

                        />
                    </h1>
                    <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
                        Como desarrollador me dedico a combinar diseño y 
                        funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>
                    <div className='fles item-center justify-center gap-3 md:justify-start md:gap-10'>
                        <Link
                            href="/projects"
                            className='px- py-2 transition-all border-2 cursor-pointer text-md 
                         w-fit rounded-xl hover:shadow-xl hover:shadow-white/50' >
                            Ver proyectos
                        </Link>
                        <Link
                            href="/contact"
                            className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md 
                         w-fit rounded-xl hover:shadow-xl hover:shadow-secondary' >
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Introduction 