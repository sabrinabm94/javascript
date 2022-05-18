import React from 'react';
import Button from '../components/Button';

const SearchForm = props => {
    return (
        <form className='search-form'>
            <div className='input-group'>
                <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                <div className='input-group-btn'>
                    <Button text='Subscribe' className='btn-danger' type='button' disabled={false} />
                </div>
            </div>
        </form>

    );
}
export default SearchForm;