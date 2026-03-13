import { useEffect, useState } from 'react';
import './App.css';
import ImageTest from './pages/ImageTest';
import WebExfiltrationTest from './pages/WebExfiltrationTest';
import CodeInfiltrationTest from './pages/CodeInfiltrationTest';
import ContextTest from './pages/ContextTest';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

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

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        if (response.ok) {
            const data = await response.json();
            setForecasts(data);
        }
    }
}

export default App;