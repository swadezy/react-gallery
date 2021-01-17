import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem({ picture, likeUpdate }) {
    console.log('in GalleryItem');

    const [descToggle, setDescToggle] = useState(false)

    const handleLikeClick = () => {
        likeUpdate(picture.id)
      }

      const toggleImg = () => {
          console.log('clicked the img');
      }

    return (
        <div>
            <img onClick={toggleImg} className="image" src={picture.path} />
            <br></br>
            <button onClick={handleLikeClick}>Like</button>
            <p>{picture.likes} people like this</p>
        </div>
    )
}


export default GalleryItem