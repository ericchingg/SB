import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

function newStoryForm({userInput}) {
    const [formData, setFormData] = useState({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    });

    // const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}));
    };

    const createStory = e =>{
        e.preventDefault();
        userInput({...formData, id: uuid()});
        setFormData({noun:'',noun2:'', adjective:'',color:''});
        // setSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={createStory}>
                <div>
                    <label htmlFor='noun'>Noun</label>
                    <input
                        id='noun'
                        onChange={handleChange}
                        type='text'
                        name='noun'
                        value={formData.noun}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='noun2'>Noun2</label>
                    <input
                        id='noun2'
                        onChange={handleChange}
                        type='text'
                        name='noun2'
                        value={formData.noun2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='adjective'>Adjective</label>
                    <input
                        id='adjective'
                        onChange={handleChange}
                        type='text'
                        name='adjective'
                        value={formData.adjective}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='color'>Color</label>
                    <input
                        id='color'
                        onChange={handleChange}
                        type='text'
                        name='color'
                        value={formData.color}
                        required
                    />
                </div>
               <button> Create madlib </button>
            </form>
        </div>
    );
}

export default newStoryForm;