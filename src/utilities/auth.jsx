    // get jwt token
    const getJwtToken = (crntUser) => {
        fetch('https://car-with-mongodb-server.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(crntUser)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
            })
    }

    export default getJwtToken