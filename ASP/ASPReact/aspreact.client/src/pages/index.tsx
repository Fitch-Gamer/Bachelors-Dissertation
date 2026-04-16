import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Index() {
    useDocumentTitle('Home — ASPReact');

    return (
        <div>
            <h2>Tests</h2>
            <p>Select a test page below:</p>
            <ul>
                <li><a href="/image-test">Image test</a></li>
                <li><a href="/simple-test">Simple test</a></li>
                <li><a href="/web-exfiltration-test">Web exfiltration test</a></li>
                <li><a href="/code-infiltration-test">Code infiltration test</a></li>
                <li><a href="/context-test">Context test</a></li>
                <li><a href="/variable-page-test">variable page test</a></li>

            </ul>
        </div>
    );
}