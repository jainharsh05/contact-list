import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const initialValues = {
  Name: "",
  number: "",
  profile_url: "",
  type: "",
  isWhatsapp: "",
};

function AddContact() {
  const location = useLocation();
  const [field, setField] = useState(initialValues);

  const editPage = location.pathname.startsWith("/edit-contact");
  let item;
  useEffect(() => {
    if (editPage) {
      const resultLocal = JSON.parse(localStorage.getItem("contact"));
      item = resultLocal[location.state.editIndex];
      setField(item);
      document.getElementById("selecttype").value = item.type;
    }
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "isWhatsapp") {
      setField({ ...field, [e.target.name]: e.target.checked });
    } else {
      setField({ ...field, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let contact = JSON.parse(localStorage.getItem("contact"));
    if (contact) {
      localStorage.setItem(
        "contact",
        JSON.stringify(
          [...contact, field].sort((a, b) => (a.Name > b.Name ? 1 : -1))
        )
      );
    } else {
      localStorage.setItem(
        "contact",
        JSON.stringify([field].sort((a, b) => (a.Name > b.Name ? 1 : -1)))
      );
    }
    navigate("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let contact = JSON.parse(localStorage.getItem("contact"));
    contact.splice(location.state.editIndex, 1, field);
    contact.sort((a, b) => (a.Name > b.Name ? 1 : -1));
    localStorage.setItem("contact", JSON.stringify(contact));
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center">
      <form
        className="w-full max-w-sm p-5"
        onSubmit={(e) => (editPage ? handleUpdate(e) : handleSubmit(e))}
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="">
          <div className="flex justify-center items-center py-3">
            <img
              className="rounded-full w-44 h-44"
              src={
                field.Name.split("")[0]
                  ? `https://ui-avatars.com/api/?name=${
                      field.Name.split("")[0]
                    }&length=1&background=random&size=262`
                  : "https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
              }
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="Name"
              placeholder="Name"
              onChange={handleChange}
              value={field.Name}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Phone
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="number"
              name="number"
              placeholder="Number"
              onChange={handleChange}
              value={field.number}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Profile URL
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              name="profile_url"
              placeholder="image url"
              onChange={handleChange}
              value={field.profile_url}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Type
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="inline-block relative w-full">
              <select
                id="selecttype"
                name="type"
                onChange={handleChange}
                // className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 text-gray-700 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option defaultValue="" disabled hidden></option>
                <option value="Personal">Personal</option>
                <option value="Office">Office</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              name="isWhatsapp"
              value={field.isWhatsapp}
              onChange={handleChange}
              checked={field.isWhatsapp}
            />
            <span className="text-sm">I am available on whatsapp</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            {editPage ? (
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update
              </button>
            ) : (
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Create Contact
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
