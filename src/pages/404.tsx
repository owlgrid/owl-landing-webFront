import { Link } from 'gatsby';
import * as React from 'react';
import { Text } from '../components/Text';

const NotFoundPage = () => (
    <div className='gap-5 flex flex-col p-12 align-center'>
        <Text style='h3' align='center' >404: Page not found</Text>
        <Text style='link' align='center'>
            <Link to='/'>Take me home</Link>
        </Text>
    </div>
);

export default NotFoundPage;
