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
            case '/1':
                return <SimpleTest />;
            case '/2':
                return <ImageTest />;
            case '/3':
                return <WebExfiltrationTest />;
            case '/4':
                return <CodeInfiltrationTest />;
            case '/5':
                return <ContextTest />;
            case '/6':
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