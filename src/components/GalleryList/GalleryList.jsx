import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList({ gallery }) {
    console.log('in GalleryList, received', gallery);

    return (
        <div className="galleryList">
            {gallery.map((picture) => (
                <GalleryItem
                    id={picture.id}
                    path={picture.path}
                    description={picture.description}
                    likes={picture.likes}
                />
            ))}


        </div>
    )
}


export default GalleryList