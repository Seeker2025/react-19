import PropTypes from 'prop-types';

import { ButtonBlue, DivBox } from './Button.styled';

export const Button = ({ clickTo }) =>{

    return (
        <DivBox>
                    <ButtonBlue
                    onClick = { clickTo }
                    >Load More
                    </ButtonBlue>
        </DivBox>            
    )

}

Button.propTypes = {
    clickTo: PropTypes.func.isRequired
}