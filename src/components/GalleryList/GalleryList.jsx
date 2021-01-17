import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ gallery, likeUpdate }) {
    console.log('in GalleryList');

    return (
        <div className="galleryList">
            {gallery.map((picture) => (
                <GalleryItem
                    key={picture.id}
                    picture={picture}
                    likeUpdate={likeUpdate}
                />
            ))}
        </div>
    )
}


export default GalleryList