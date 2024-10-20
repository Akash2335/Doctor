import react, { useState } from 'react';

const Login = () => {
    const [state, setState] = useState('Sing Up');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[name, setName] = useState('');
    const onSubmitHandler = async(event) => {
        event.preventDefault();
    }
    
    return(
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state == 'Sing Up' ? 'Create Account' : 'Login'}</p>
                <p>Please {state == 'Sing Up' ? "Sing up" : "Login"} to book appoinment</p>
                {
                    state=='Sing Up'&&   <div className='w-full'>
                    <p>Full Name</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} name={name} required placeholder='Enter name' />
                </div>
                }             
                <div className='w-full'>
                    <p> Email</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} name={ email}  required placeholder=''/>
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => password(e.target.value)} value={password} name={ password}  required placeholder=''/>
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state == 'Sing Up' ? 'Create Account' : 'Login'}</button>
                {
                    state == 'Sing Up' ? <p>Already have an account? <span className='text-primary underline cursor-pointer' onClick={(e)=>setState('Login')}>Login here</span> </p>: <p>Create an new account? <span className='text-primary underline cursor-pointer' onClick={(e)=>setState('Sing Up')}>Click here</span> </p>
                }
            </div>
        </form>
    )
};

export default Login;