import React, { useState, useEffect } from 'react';

function DogGallery() {
    const [dogImages, setDogImages] = useState([]);

    const fetchDogImages = () => {
        fetch('https://api.thedogapi.com/v1/images/search?limit=1')
            .then(response => response.json())
            .then(data => {
                // Imprimir todos los atributos de cada objeto en la consola
                data.forEach((dog, index) => {
                    console.log(`Dog ${index + 1}:`, dog);
                });

                // Actualizar el estado con los datos obtenidos
                setDogImages(data);
            });
    };

    useEffect(() => {
        fetchDogImages();
    }, []);

    const refreshImages = () => {
        fetchDogImages();
    };

    return (
        <div className='dog-gallery'>
            <h1>Dog Gallery</h1>
            <button onClick={refreshImages}>Refresh Images</button>
            <div className="gallery">
                {dogImages.map((dog, index) => (
                    <div key={index} className="image-container">
                        <img src={dog.url} alt={`Dog ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogGallery;
