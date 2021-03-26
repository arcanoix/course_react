import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    /* const [images, setImages] = useState([]);

    useEffect( () => {
        getGif( category )
            .then( imgs => setImages( imgs ) );
    },  [ category ]); */

    return (
        <div>
                <h3>{  category }</h3>
                { loading &&  <p>Loading</p>}
                 <ol>
                    {
                        images.map( img  => (
                               <GifGridItem 
                               { ...img }
                               key = {img.id} 
                               />
                        ))
                    }
                </ol> 
        </div>
    )
}
