import { Flex } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import { useEffect, useState } from 'react';
// import PlaceDetail from './components/PlaceDetail';

const places = [
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
  { name: 'Sample Place1' },
]

function App() {

  const [coordinates, setCoordinates] = useState({})
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("");
  const [isLoading, seIsLoading] = useState(false);

  useEffect(() => {
    // get the users current location on initial stage
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

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
      {/* <Header setType={setType} setRatings={setRatings} setCoordinates={setCoordinates} /> */}
      <List places={places} isLoading={isLoading} />
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />
      {/* <PlaceDetail /> */}
    </Flex>
  );
}

export default App;
