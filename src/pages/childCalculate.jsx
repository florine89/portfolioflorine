import React from 'react';
import calculate from '../../public/assets/projects/calculatricechild.png';
import x from '../../public/assets/postgresql.png'
import Image from 'next/image';

const childCalculate = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-96 mt-48 rounded'>               
                    <Image  className='rounded' src={calculate} alt='/' /> 
                    <p></p>               
            </div>          
        </div>
        
    )
}

export default childCalculate