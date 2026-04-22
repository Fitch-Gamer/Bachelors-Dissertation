import useDocumentTitle from '../hooks/useDocumentTitle';
import imageSrc from '../../public/perturb_full_x.jpg';

export default function ImageTest() {
    useDocumentTitle('ASPReact');

    return (
        <div>
            <img src={imageSrc} alt="Image" />
            <p><a href="/">Back to home</a></p>
        </div>
    );
}