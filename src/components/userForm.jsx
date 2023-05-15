import {useState} from 'react'
import '../styles/userForm.css'



export default function UserForm({handleUsername}) {
    const [inputText, setInputText] = useState('')

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    return (
        <>
            <form class='form-container' >
                <label
                    for='Name'>
                        What is your name? 
                </label>
                <input 
                    id='Name'
                    type="text" 
                    value={inputText}
                    onChange={handleInput}
                    placeholder='Your Name'
                />
                <button 
                    type="submit"
                    onClick={() => handleUsername(inputText)}
                >
                Submit
                </button>
            </form>
        </>
    )
}