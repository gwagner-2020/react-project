import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [artworks, setArtworks] = useState([]);

//   const baseUrl: 'https://api.worldbank.org/v2/country/'

// const getIndicatorByCountry = async (country: string, indicator: string, page:number=1): Promise<[]> => {  
//   const query = `${baseUrl}/${country}/indicator/${indicator}?page=${page}&format=json`
//   const response = await axios.get(query)  
//   const data = response.data

//   if (data[0].pages > page) {
//     return data.concat(await getIndicatorByCountry(country, indicator, page+1)) 
//   } else {
//     return data
//   }
// }


// const instance = axios.create({
//   baseURL: 'https://api.artic.edu/api',
// });

// getAllArtworks();

// async function getAllArtworks() {
//     try {
//         const response = await instance.get('/v1/artworks');
//         const totalArtworks = response.data.count;
//         const totalPages = Math.ceil(totalArtworks / response.data.max_per_page);
//         const promiseArray = [];
//         for (let i = 0; i < (totalPages + 1); i++) {
//             promiseArray.push(instance.get(`/artworks?page=${i}`));
//         };

//         // promise.all allows you to make multiple axios requests at the same time.
//         // It returns an array of the results of all your axios requests
//         let resolvedPromises = await Promise.all(promiseArray)
//         for (let i = 0; i < resolvedPromises.length; i++) {
//             // This will give you access to the output of each API call
//             console.log(resolvedPromises[i])
//         }
//         setArtworks(resolvedPromises);
//     } catch (err) {
//         console.log('Something went wrong.');
//     }
//   }
  
    useEffect(() => {
    // getAllArtworks();
    axios.get('https://api.artic.edu/api/v1/artworks??page=1&limit=100')
    .then(response => {      
      setArtworks(response.data);
      }
    )
      .catch(error => {
        console.error(error);
      });
  }, []);

  //console.log(artworks.pagination);
  //console.log(artworks.data);
  const artworksArray = artworks.data;
  console.log('artworksArray:', artworksArray);

  return (
    <div>
      <ul>
      {artworksArray?.map(artwork=> (
        <><li>{artwork?.artist_display}, {artwork?.title}</li><li>
          <img src={'https://www.artic.edu/iiif/2/' + artwork?.image_id + '/full/200,/0/default.jpg'} alt="artwork" />
        </li></>
      ))}
      </ul>
      {/* {artworksArray?.map(artwork => (
      <img key={artwork?.id} src={'https://www.artic.edu/iiif/2/' + artwork?.image_id + '/full/843,/0/default.jpg'} alt="artwork"></img>
    ))} */}
    </div>

  );
}

export default App;
