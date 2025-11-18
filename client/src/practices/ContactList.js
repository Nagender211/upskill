// ContactList.jsx
import React from "react";

const ContactList = (props) => {
  const { contactData,toggleIsFav,handleDelete } = props;
  const { number, favImag,id } = contactData;

  const handleIsFav=()=>{
    toggleIsFav(id)
  }

  const handleDeleteToogle=()=>{
    handleDelete(id)
  }

  return (
    <tr className="odd:bg-white even:bg-indigo-50/30">
      <td className="border-b border-indigo-100 px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="font-medium text-gray-900">{number}</span>
          <button
            onClick={handleDeleteToogle}
            className="px-3 py-1.5 rounded-lg bg-rose-500 text-white text-sm shadow hover:bg-rose-600 active:scale-[0.98] transition"
          >
            Delete
          </button>
        </div>
      </td>
      <td className="border-b border-indigo-100 px-6 py-3">
        <img
          src={
            favImag
              ? "https://cdn-icons-png.flaticon.com/512/541/541415.png"
              : "https://www.iconpacks.net/icons/1/free-star-icon-984-thumb.png"
          }
          alt={favImag ? "favorited" : "not favorite"}
          className="w-6 h-6 inline-block align-middle cursor-pointer hover:scale-110 transition"
          onClick={handleIsFav}
        />
      </td>
    </tr>
  );
};

export default ContactList;
