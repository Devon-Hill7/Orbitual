import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [serverHealth, setServerHealth] = useState('Checking...');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/health`)
            .then(res => setServerHealth(res.data))
            .catch(() => setServerHealth('FAILED'));
    }, []);

    return (
        <div>
            <h1>Connection Test</h1>
            <p>Backend status: {serverHealth}</p>
        </div>
    );
}

export default Home;