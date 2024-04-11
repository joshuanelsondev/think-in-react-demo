// AddOption.jsx
import './addOption.css';

export default function AddOption () {

    return (
        <form className='option-form'>
            <input type='text' name='option' id='option'/>
            <input type='submit' value='Add Option' id='add-btn'/>
        </form>
    )
}