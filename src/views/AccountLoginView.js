import { useEffect, useRef, useState } from 'react';

export default function AccountLoginView() {
    const [ errorMessage, setErrorMessage ] = useState({
        alert: null,
        state: false,
        className: null,
    });
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
            setErrorMessage((prevState) => prevState = {
                alert: 'Loggin attempt has failed.',
                className: 'alert-danger',
                state: true,
            });
        } else {
            console.log('Success');
            setErrorMessage((prevState) => prevState = {
                alert: 'Loggin was successful.',
                className: 'alert-success',
                state: true,
            });
        }
    }

    return (
        <section className='auth'>
            <div className='auth-system wrapper'>
                <h1>Account Login</h1>
                <form id="form">
                    <div>
                        <label htmlFor="email">Email Adress:</label>
                        <input ref={emailRef} className='fill-width' type="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input ref={passwordRef} className='fill-width' type="password" id="password"/>
                    </div>
                    { errorMessage?.state ?
                        <p className={errorMessage.className}>{errorMessage.alert}</p>
                        : null
                    }
                    <button onClick={loginUser} className="button button-primary mt40" type="submit">Login</button>
                </form>
            </div>
        </section>
    );
}
