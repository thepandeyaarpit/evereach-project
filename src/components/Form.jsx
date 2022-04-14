import React, {useState, useEffect, useRef} from 'react';

function Form(props){
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
                    <input type="text" placeholder="update your Message" value={input} name="text" className="todo-input edit" onChange={handleChange} ref={inputRef} />
                    <button className="todo-button-edit edit">Update</button>
                </>
                
            ) : 
            ( 
                <>
                    <span>Write your Message</span>
                    <textarea type="text" placeholder="Add your Message" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef} />
                    <span className="small-character">160 Character</span>
                    <div className='buttons-All'>
                        <button className="todo-button">Add</button>
                        <button className="todo-cancel-btn" >Cancel</button>
                    </div>
                </>
                
            )
            }
            
        </form>
    )
}

export default Form;