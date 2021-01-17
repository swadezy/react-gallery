import './GalleryItem.css';

function GalleryItem({ id, path, description, likes }) {
    console.log('in GalleryItem');

    return (
        



        <img className="image" src={path} />
    )
}


export default GalleryItem