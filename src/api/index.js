import axios from 'axios'



const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'





export  const getplacesdata = async (ne,sw)=>{
    try{
        console.log(ne,sw)
      const {data:{data}} =  await axios.get(URL,{
          method: 'GET',
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'd39bb9467cmshf974522d832b7c4p102166jsnca1e4c854e88'
  }
      })    
       
      return data
    }
    catch(err)
    {
          console.log(err)
    }
}
