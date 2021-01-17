import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css';

function GalleryList({ gallery, likeUpdate, deleteItem }) {
    console.log('in GalleryList');

    return (
        <div className="galleryList">
                  <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
            {gallery.map((picture) => (
                <GalleryItem
                    key={picture.id}
                    picture={picture}
                    likeUpdate={likeUpdate}
                    deleteItem={deleteItem}
                />
            ))}
        </div>
    )
}


export default GalleryList