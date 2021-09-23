function DeleteModal({ handleDelete, handleClose }) {
  return (
    <>
      <div className="vw border-2 border-gray-200 border-opacity-60 overflow-hidden bg-white shadow-md rounded px-4 mb-4 text-center">
        <div>
          <p>Are you sure you want to delete this listing?</p>
          <button
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded m-6 self-auto "
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded m-6 self-auto "
            onClick={handleDelete}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
