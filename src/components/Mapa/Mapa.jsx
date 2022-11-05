import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Mapa.css";
import markerlogo from "../../imagens/marker.png";

const position = 
{
    lat: -20.811741, 
    lng: -49.377342
}; 

const containerStyle = {
    width:'60vw', 
    height:'80vh',
};



const Mapa = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCfPWCGpr4aBUMwAc4eMzfXQ6NLbRDfnXQ",
    })

        
    return isLoaded ? (
        <div className='mapa flex flex-c'>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={13}
        >

            <Marker 
                position={{
                    lat: -20.820920300135434, 
                    lng: -49.37762956779753
                }} 
                options={{
                    label: {
                        text: "Rei Doces",
                        className: "map-marker"
                    }
                }}
                icon={markerlogo}
                onClick={(marker) => {
                    
                    
                }}
            />
            

        </GoogleMap>
        </div>
    ) : (
        <></>
    )
}

export default Mapa;