import {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import FingerprintJS from '@fingerprintjs/fingerprintjs'



export default function VariablePage() {
    const fpPromise = FingerprintJS.load();
    const AI_identifiers = [ //hard coded currently but could be migrated to a database
        'test', //test
    ];

    const [userId, setUserId] = useState<string>('unknown');

    (async () => {
        // Get the visitor identifier when you need it.
        const fp = await fpPromise
        const result = await fp.get()
        setUserId(result.visitorId)
    })()

    useDocumentTitle('ASPReact');


    return (
        <div>
            <h1>Variable page test</h1>
            <p>Placeholder page for the Variable page test.</p>
            <p>User identifier: {userId}</p>
            <p>You are {AI_identifiers.includes(userId) ? 'an AI' : 'a human'}</p>
            <p><a href="/">Back to home</a></p>
        </div>
    );
}