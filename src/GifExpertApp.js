import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Bakemonogatari'])

    // const handleAdd = () => {
    //     const anime = 'Kimetsu no Yaiba';
    //     //forma de agregar nuevo elemento al arreglos
    //     setCategories([... categories, anime]);
    //     // setCategories( cats => [... categories, anime] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            <ol>
                { 
                    categories.map((category) => {
                        // return <li key={ category }>{ category }</li>
                        return <GifGrid 
                                    key={ category } 
                                    category={ category } 
                                />
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;