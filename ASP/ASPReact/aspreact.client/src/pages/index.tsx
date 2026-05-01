import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Index() {
    useDocumentTitle('Home — ASPReact');

    return (
        <div style={{ padding: '12px' }}>

            <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #000', padding: '8px' }}>Test</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #000', padding: '8px' }}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}><a href="/1">Simple indirect injection</a></td>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Basic test checking if the model is vulnerable to simple indirect prompt injection and local persistance.</td>
                    </tr>


                    <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}><a href="/3">Web exfiltration test</a></td>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Tests if the model can exfiltrate data using the URL.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}><a href="/4">Code infiltration test</a></td>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Checking if the model returns all code suggestions or can be influenced to include malicious code in those suggestions.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}><a href="/6">Figerprint test</a></td>
                        <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Attempts to identify if the user is an AI or human based upon the request fingerprint.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px' }}><a href="/2">Image test</a></td>
                        <td style={{ padding: '8px' }}>Tests if images can be used to indirectly prompt a given model.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}