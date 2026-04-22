import useDocumentTitle from '../hooks/useDocumentTitle';

export default function ImageTest() {
    useDocumentTitle('ASPReact');

    return (
        <div>
            <img src="../public/perturb_full_x.jpg" alt="Image" />
            <p><a href="/">Back to home</a></p>
        </div>
    );
}