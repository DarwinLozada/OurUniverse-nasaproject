import Modal from "./Modal";

export default function MediaModal({
  src,
  mediaType,
  altText,
  setShowImageModal,
  closeModalClickingOutside,
}) {
  return (
    <Modal
      toggleModal={setShowImageModal}
      closeModalClickingOutside={closeModalClickingOutside}
    >
      {mediaType === "image" ? (
        <img
          src={src}
          alt={altText}
          className="absolute opacity-100 z-20 max-w-md max-h-96 md:max-h-36rem
          md:max-w-6xl xl:max-h-40rem xl:max-w-6xl images-opaque-shadow"
        ></img>
      ) : (
        <iframe
          src={src}
          className="absolute opacity-100 z-20 max-w-md max-h-96 md:max-h-36rem
        md:max-w-6xl xl:max-h-40rem xl:max-w-6xl images-opaque-shadow"
        />
      )}
    </Modal>
  );
}
