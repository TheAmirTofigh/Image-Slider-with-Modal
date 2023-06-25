"use client";
import MainImage from "./MainImage";
import ImagesList from "./ImagesList";
import {useState} from "react";
import ImagesModal from "./ImagesModal";

const ImagesGallery = () => {
    const [imageId, setImageId] = useState(0)
    const [modalImageId, setModalImageId] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <MainImage imageId={imageId} setModalOpen={setModalOpen}/>
            <ImagesList setImageId={setImageId} imageId={imageId} setModalImageId={setModalImageId} setModalOpen={setModalOpen}/>
            <ImagesModal imageId={modalImageId} setImageId={setModalImageId} modalOpen={modalOpen} setModalOpen={setModalOpen}/>Z
        </>
    );
};

export default ImagesGallery;
