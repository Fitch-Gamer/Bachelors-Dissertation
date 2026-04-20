import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Index() {
    useDocumentTitle('Home — ASPReact');

    return (
        <div>
            <h2>Tests</h2>
            <p>Select a test page below:</p>
            <ul>
                <li><a href="/2">Image test</a></li>
                <li><a href="/1">Simple test</a></li>
                <li><a href="/3">Web exfiltration test</a></li>
                <li><a href="/4">Code infiltration test</a></li>
                <li><a href="/5">Context test</a></li>
                <li><a href="/6">variable page test</a></li>

            </ul>
        </div>
    );
}