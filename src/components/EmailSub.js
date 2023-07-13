import React, { useState } from 'react';

function EmailSub() {
    const[email, setEmail] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            console.log(email)
        } catch(error) {
            console.error(error);
        }
    };

    return (
        <div className= 'bg-pma-dark-orange h-36 flex justify-center items-center'>
            <h1 className=' text-white font-canela px-1 text-2xl'>Stay in the loop! App coming soon.</h1>
            <form onSubmit={handleSubmit} className='m-4 flex'>
                <input className=' rounded-l-lg px-4 mr-0' 
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="amy@gmail.com"
                    required
                />
                <button type="submit" className='bg-pma-orange px-8 rounded-r-lg text-white p-2 font-bold uppercase'>SUBMIT</button>
            </form>
        </div>
    );
}

export default EmailSub