import './App.css';
import ImageTest from './pages/ImageTest';
import WebExfiltrationTest from './pages/WebExfiltrationTest';
import CodeInfiltrationTest from './pages/CodeInfiltrationTest';
import ContextTest from './pages/ContextTest';
import Index from './pages/index';
import VariablePage from './pages/VariablePage';
import SimpleTest from './pages/SimpleTest';


function App() {
    const path = window.location.pathname.replace(/\/+$/, ''); // trim trailing slash

    function renderPage() {
        switch (path) {
            case '/simple-test':
                return <SimpleTest />;
            case '/image-test':
                return <ImageTest />;
            case '/web-exfiltration-test':
                return <WebExfiltrationTest />;
            case '/code-infiltration-test':
                return <CodeInfiltrationTest />;
            case '/context-test':
                return <ContextTest />;
            case '/variable-page-test':
                return <VariablePage/>;
            default:
                return <Index />;
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    );
}

export default App;