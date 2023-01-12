
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    
    const myData = props.data.result.read()
    const display = myData.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}



export default Gallery
