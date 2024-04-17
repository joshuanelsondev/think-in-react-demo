// AddOption.jsx
import './addOption.css';

export default function AddOption ({ name }) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(name);
    }

    return (
        <form className='option-form' onSubmit={handleSubmit}>
            <input type='text' name='option' id='option'/>
            <input type='submit' value='Add Option' id='add-btn'/>
        </form>
    )
}
