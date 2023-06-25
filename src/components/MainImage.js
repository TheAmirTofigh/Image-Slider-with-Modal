import Image from "next/image";
import {images} from "../../public/images"

const MainImage = ({imageId, setModalOpen}) => {
    const handelOpenModal = () => {
        setModalOpen(true)
    }

    return (
        <div className='w-[500px] h-[420px] cursor-pointer max-sm:w-full max-sm:h-auto max-sm:aspect-[7/6]' onClick={handelOpenModal}>
            <Image src={images[imageId].url} alt={"Image"} width={1000} height={1000} className='w-[500px] h-[420px] rounded-2xl max-sm:w-full max-sm:h-auto max-sm:aspect-[7/6]'/>
        </div>
    );
};

export default MainImage;
