const form = document.querySelector('#signupForm');

form.addEventListener('submit', (e) => {

    e.preventDefault(); 
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    try {
        const response = fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        if (response.ok) alert('Signup successful');
    } catch (err) {
        console.log(err);
    }

});
