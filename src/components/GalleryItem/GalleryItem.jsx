import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({ picture, likeUpdate, deleteItem }) {
    console.log('in GalleryItem');

    const [descToggle, setDescToggle] = useState(true)

    const handleLikeClick = () => {
        likeUpdate(picture.id)
    }

    const handleDeleteClick = () => {
        console.log('clicked delete');
        deleteItem(picture.id)
    }

    const toggleImg = () => {
        console.log('clicked the img');
        setDescToggle(!descToggle);
    }

    return (
        <div className="fullPost">
            {descToggle ?
                <img onClick={toggleImg} className="image" src={picture.path} /> :
                <div onClick={toggleImg} className="description">{picture.description}</div>
            }
            <br></br>
            <button onClick={handleLikeClick} className="button">Like</button>
            <button onClick={handleDeleteClick} className="deleteButton">Delete</button>
            <p>{picture.likes} people like this</p>
        </div>
    )
}


export default GalleryItem