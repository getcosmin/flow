import { useEffect, useRef } from 'react';

export default function AccountLoginView() {
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        fetchLogin();

        async function fetchLogin() {
            const response = await fetch('/json');
            const data = await response.json();
            console.log(data);
        }
    }, []);

    async function loginUser(event) {
        event.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        const login = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        console.log(JSON.stringify(login));

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        if (data.status === 'error') {
            console.log('Attempt has failed.');
        } else {
            console.log('Success');
        }
    }

    return (
        <section className='auth'>
            <div className='auth-system wrapper'>
            <h1>Account Login</h1>
            <form id="form">
                <div>
                    <label for="email">Email Adress:</label>
                    <input ref={emailRef} className='fill-width' type="email" id="email"/>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input ref={passwordRef} className='fill-width' type="password" id="password"/>
                </div>
                <button onClick={loginUser} className="button-primary" type="submit">Login</button>
            </form>
            </div>
        </section>
    );
}
