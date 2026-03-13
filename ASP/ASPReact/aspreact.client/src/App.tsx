import './App.css';
import ImageTest from './pages/ImageTest';
import WebExfiltrationTest from './pages/WebExfiltrationTest';
import CodeInfiltrationTest from './pages/CodeInfiltrationTest';
import ContextTest from './pages/ContextTest';

function App() {

    function renderPage() {
        const path = window.location.pathname.replace(/\/+$/, ''); // trim trailing slash
        switch (path) {
            case '/image-test':
                return <ImageTest />;
            case '/web-exfiltration-test':
                return <WebExfiltrationTest />;
            case '/code-infiltration-test':
                return <CodeInfiltrationTest />;
            case '/context-test':
                return <ContextTest />;
            default:
                return (
                    <div>
                        <h2>Tests</h2>
                        <p>Select a test page below:</p>
                        <ul>
                            <li><a href="/image-test">Image test</a></li>
                            <li><a href="/web-exfiltration-test">Web exfiltration test</a></li>
                            <li><a href="/code-infiltration-test">Code infiltration test</a></li>
                            <li><a href="/context-test">Context test</a></li>
                        </ul>
                    </div>
                );
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    );
}

export default App;