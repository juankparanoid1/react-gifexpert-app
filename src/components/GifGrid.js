import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //asi renombramos data:images
    const { data:images, loading } = useFetchGifs(category);

    return (
       <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>
            <div className='card-grid'>
                {
                     images.map(img => {
                        // return <li key={id}> {!title ? 'Sin titulo' : title} </li>
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
            </div>
       </>
    )
}
