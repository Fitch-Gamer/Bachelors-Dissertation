import { useEffect, useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function VariablePage() {
    useDocumentTitle('Variable Page Test — ASPReact');

    const [userAgent, setUserAgent] = useState<string>('unknown');

    useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            setUserAgent(navigator.userAgent);
        }
    }, []);

    return (
        <div>
            <h1>Variable page test</h1>
            <p>Placeholder page for the image test.</p>
            <p><strong>Client User-Agent:</strong></p>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{userAgent}</pre>
            <p><a href="/">Back to home</a></p>
        </div>
    );
}