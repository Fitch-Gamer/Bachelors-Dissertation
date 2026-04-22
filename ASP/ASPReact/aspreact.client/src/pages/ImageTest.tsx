import useDocumentTitle from '../hooks/useDocumentTitle';

export default function ImageTest() {
    useDocumentTitle('ASPReact');

    return (
        <div>
            <img src="/perturb_full_X.jpg" alt="Image" />
            <p><a href="/">Back to home</a></p>
        </div>
    );
}