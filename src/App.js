import { Flex } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import { getPlacesData } from './API';
// import PlaceDetail from './components/PlaceDetail';


function App() {

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null)
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("");
  const [places, setPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // get the users current location on initial stage
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, []);

  useEffect(() => {
    setIsLoading(true)
    getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data);
      setIsLoading(false);
    })
  }, [coordinates, bounds])

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Header setType={setType} setRatings={setRatings} setCoordinates={setCoordinates} />
      <List places={places} isLoading={isLoading} />
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
      />
      {/* <PlaceDetail /> */}
    </Flex>
  );
}

export default App;
