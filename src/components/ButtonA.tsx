import React from 'react';
import { Button } from 'react-bootstrap';

export const ButtonA: React.FC<{handleClick?: () => void}> = ({handleClick, children}) => {
    return <Button variant="info" size="lg" className="button-a-color" onClick={() => {
        if(handleClick){
            handleClick();
        }
    }}>{children}</Button>
}

export default ButtonA;