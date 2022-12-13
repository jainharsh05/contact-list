import React from "react";
import { useNavigate } from "react-router-dom";

function ContactCard({ contactData, sno, handleModal, handleEdit }) {
  return (
    <tr className="border border-gray-200">
      <th className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        {sno}
      </th>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        {contactData?.Name}
      </td>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        {contactData?.number}
      </td>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        {contactData?.type}
      </td>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        {String(contactData?.isWhatsapp ?? false)}
      </td>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        {contactData?.profile_url}
      </td>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        <button
          onClick={() => {
            handleEdit();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
      </td>
      <td className="px-5 py-2 border-b text-primary border-gray-200 bg-white text-sm">
        <button
          onClick={() => handleModal()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactCard;
