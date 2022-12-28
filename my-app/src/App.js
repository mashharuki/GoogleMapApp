import logo from './logo.svg';
import './App.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useState, useCallback} from 'react';

const containerStyle = {
  width: '600px',
  height: '600px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

/**
 * App component
 * @returns 
 */
function App() {
  const [map, setMap] = useState(null);

  /**
   * useJsApiLoader function
   */
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });

  /**
   * onLoad function
   */
  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  /**
   * onUnmount function
   */
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        ) : (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
