import React from 'react';
import { Button } from 'react-bootstrap';

export const ButtonB: React.FC<{handleClick?: () => void}> = ({handleClick, children}) => {
    return <Button variant="info" size="lg" className="button-b-color" onClick={() => {
        if(handleClick){
            handleClick();
        }
    }}>{children}</Button>
}

export default ButtonB;