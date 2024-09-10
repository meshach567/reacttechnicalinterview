type Props = {
    email: string,
    password: string
}

export function login({email, password}: Props) {
    const delay = (0.7 + Math.random() * 2 ) * 1000;

    return new Promise<void>((resolve, reject) => {
        setTimeout(function () {
            if (password === 'password123' && !!email) {
                resolve();
            } else {
                reject(new Error('invalid email or password'))
            }
        }, delay);
    })
}