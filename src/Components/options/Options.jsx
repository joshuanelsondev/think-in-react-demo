// Options.jsx
import './options.css';
import Option from '/src/Components/Option';
import data from '/src/assets/data';
import { v4 as generateUUID } from "uuid"; 


export default function Options () {

    return (
        <div className='optionsContainer'>
            <div className='yourOptions'>
                <p>Your Options</p>
                <p>Remove All</p>
            </div>
            {data.map((chore, i) => {
                return <Option key={generateUUID()} i={i + 1} chore={chore} />
            })}
        </div>
    )
        
}
