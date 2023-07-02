import { Flex } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import { useEffect, useState } from 'react';
import { getPlacesData } from './API';
import { Rating } from "@material-ui/lab";

function App() {
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("");
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filteredData = places?.filter((place) => place.rating === ratings) ?? [];
    console.log(filteredData)
    setFilteredPlaces(filteredData);
  }, [ratings, places]);


  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

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
      <List places={filteredPlaces.length ? filteredPlaces : places} isLoading={isLoading} />
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  );
}

export default App;