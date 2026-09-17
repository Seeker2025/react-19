import { Oval    } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
    return (
        <Spinner>

            <Oval
                                height={60}
                                width={60}
                                color="#d6d6d6"
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#8a8a8a"
                                strokeWidth={8}
                                strokeWidthSecondary={7}
            />

        </Spinner>
    )
}