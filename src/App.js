import React, { useEffect, useState }  from 'react'
import Header from './component/Header/Header'
import List from './component/List/List'
import Map from './component/Map/Map'
import PlaceDetails from './component/PlaceDtails/PlaceDetails'
import {CssBaseline,Grid} from '@material-ui/core'
 import {getplacesdata} from './api/index'
  

const App = ()=>{

   const [places, setPlaces] = useState([])
   const [bounds, setBounds] = useState(null)
   const [coordinate, setCoordinate] = useState({})
   useEffect( () => {
    async function location(){
     await navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
       setCoordinate({ lat: latitude, lng: longitude });
      //  console.log(coordinate)
      });
      
    }
    
    location()
       
    }, []);
  
  useEffect(() => {
      // console.log(bounds)
      if(bounds){
        // console.log(bounds)  
        getplacesdata(bounds.ne,bounds.sw)
        .then((data)=>{
          console.log(data)
          setPlaces(data)
        })
      }
  }, [coordinate, bounds])
  
  

  return(
    
    <>
       <CssBaseline/>
       <Header/>
       <Grid container spacing={3} style={{width:'100%'}}>
         <Grid item xs={12} md={4}>
           <List places={places}/>
         </Grid>
         <Grid item xs={12} md={8}>
           <Map setCoordinate={setCoordinate} setBounds={setBounds} coordinate={coordinate} places={places}/>
         </Grid>
       </Grid> 

       
    </>
  )
}

export default App 

