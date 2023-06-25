import {images} from "../../public/images";
import ImagesListItem from "./ImagesListItem";
import ImagesListLastItem from "@/components/ImagesListLastItem";

const ImagesList = ({imageId, setImageId, setModalImageId, setModalOpen}) => {
    const itemList = images.slice(0, 3).map(e => <ImagesListItem url={e.url} key={e.id} id={e.id} imageId={imageId} setImageId={setImageId} setModalImageId={setModalImageId}/>)
    const lastItem = images.slice(3, 4).map(e => <ImagesListLastItem url={e.url} key={e.id} setModalOpen={setModalOpen}/>)

    return (
        <div className='max-w-[500px] flex flex-row items-center justify-center max-sm:max-w-full'>
            <div className='w-[500px] overflow-y-hidden flex flex-row-reverse items-end justify-between max-sm:w-full'>
                {itemList}
                {lastItem}
            </div>
        </div>
    );
};

export default ImagesList;
