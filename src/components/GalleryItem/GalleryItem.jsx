import './GalleryItem.css';

function GalleryItem({ picture, gallery, setGallery }) {
    console.log('in GalleryItem');

    const handleLikeClick = () => {
        gallery[picture.id-1].likes ++
        console.log(gallery[picture.id-1].likes, 'people now like this');
        setGallery(gallery)
      }

    return (
        <div>
            <img className="image" src={picture.path} />
            <br></br>
            <button onClick={handleLikeClick}>Like</button>
            <p>{picture.likes} people like this</p>
        </div>
    )
}


export default GalleryItem