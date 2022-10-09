import styles from './Ordener.module.scss'
import options from './options.json'
import { useState } from 'react'
import classNames from 'classnames'
import {MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props{
    ordener: string,
    setOrdener: React.Dispatch<React.SetStateAction<string>>
}


export default function Ordener({ordener, setOrdener} : Props){
    const [opened, setOpened] = useState(false)
    const ordenerName = ordener && options.find(option =>
         option.value === ordener)?.name


    return(
        <button
         className={classNames({
            [styles.ordener]: true,
            [styles["ordener--active"]] : ordener !== "",
         })}
         onClick={()=> setOpened(!opened)}
         onBlur={() => setOpened(false)}>
            <span>{ordenerName || "Order By"}</span>
            {opened ? 
            < MdKeyboardArrowUp size={20}/> :
            < MdKeyboardArrowDown size={20} />}
            <div className={classNames({[styles.ordener__options] : true,
            [styles["ordener__options--active"]] :opened, 
            })}>
                {options.map(option => (
                    <div className={styles.ordener__option}  key={option.value}
                    onClick={()=> setOrdener(option.value)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}