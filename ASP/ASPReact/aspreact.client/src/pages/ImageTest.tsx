import useDocumentTitle from '../hooks/useDocumentTitle';

export default function ImageTest() {
    useDocumentTitle('ASPReact');

    return (
        <div>
            <h1>Image Test</h1>
            <p>Placeholder page for the image test.</p>
            <p><a href="/">Back to home</a></p>
        </div>
    );
}