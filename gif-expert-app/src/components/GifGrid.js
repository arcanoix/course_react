import React, { useEffect , useState} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGif();
    },  []);

    const getGif = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=lDmzw4UCn9sCDmgzDlQbebsHJdfD9Es0';

        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }

    return (
        <div>
                <h3>{  category }</h3>
                
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
