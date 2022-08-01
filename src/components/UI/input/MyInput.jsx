import React from 'react';
import classes from './MyInput.module.css';

/*Оборачиваем props в функцию React.forwardref*/
const MyInput = React.forwardRef((props, ref) => {
    return (
        /*Нельзя забывать передать эту ссылку в любой блок/элемент через input*/
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;