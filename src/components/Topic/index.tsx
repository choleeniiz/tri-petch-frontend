import React from "react"
import './index.css';

interface IProps {
    number?: string,
    numberColor?: string,
    underlineColor?: string,
    text: string
}



export const Topic = ({ number, text, numberColor, underlineColor }: IProps) => {
    return <div className="flex items-center">
        <div className='mr-3'>
            <div className={`md:text-18 tracking-wide text-${numberColor ?? 'black'}`}>
                {number}
            </div>

            <div className={`box bg-${underlineColor ?? 'purple'}`}/>
        </div>
        <div className='text-gray2 text-28 md:text-36  tracking-wider'>{text}</div>
    </div>
}
