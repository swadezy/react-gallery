import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ gallery, setGallery }) {
    console.log('in GalleryList, received', gallery);

    return (
        <div className="galleryList">
            {gallery.map((picture) => (
                <GalleryItem
                    key={picture.id}
                    picture={picture}
                    gallery={gallery}
                    setGallery={setGallery}
                />
            ))}
        </div>
    )
}


export default GalleryList