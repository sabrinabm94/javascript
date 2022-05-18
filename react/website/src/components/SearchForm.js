import React from 'react';

const SearchForm = props => {
    return (
        <form className='search-form'>
            <div className='input-group'>
                <input type='email' className='form-control' size='50' placeholder='Email Address' required />
                <div className='input-group-btn'>
                    <button type='button' className='btn btn-danger'>Subscribe</button>
                </div>
            </div>
        </form>

    );
}
export default SearchForm;