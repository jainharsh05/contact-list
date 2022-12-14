import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { uniqueKey } from "../Helper/generator";
import ContactCard from "./Cards.js/ContactCard";
import Modal from "./Modal/modal";
import Lottie from "lottie-react";
import NoContactAnimation from "../lottie/nocontactsbook.json";

function Contacts() {
  const [phonebook, setPhoneBook] = useState([]);
  const [selectedDeletion, setSelectedDeletion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setPhoneBook(JSON.parse(localStorage.getItem("contact")));
  }, [showModal]);

  const handleModal = (ind) => {
    setShowModal(true);
    setSelectedDeletion(ind);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const handleDel = () => {
    let delElement = JSON.parse(localStorage.getItem("contact"));
    delElement.splice(Number(selectedDeletion), 1);
    delElement.sort((a, b) => (a.Name > b.Name ? 1 : -1));
    localStorage.setItem("contact", JSON.stringify(delElement));
    setSelectedDeletion(null);
    setShowModal(false);
  };

  const handleEdit = (editid) => {
    navigate(`/edit-contact/${editid}`, { state: { editIndex: editid } });
  };

  return (
    <>
      {!!showModal && (
        <Modal
          handleDelete={() => handleDel()}
          handleModalClose={() => handleModalClose()}
        />
      )}
      <section className="text-center flex justify-center align-center mt-20">
        <a
          href="/add-contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Contact
        </a>
      </section>
      <section>
        {phonebook.length > 0 ? (
          <div className="py-10">
            <div className="overflow-x-auto flex">
              <table className=" border table-auto md:table-auto w-full leading-normal border-gray-200">
                <thead className="bg-tableHeaderColor border-gray-200 rounded-t-lg">
                  <tr className="rounded-t-lg">
                    <th className="px-5 py-5  text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      S No.
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      Name
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      Phone
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      type
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      isWhatsapp
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      image
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      Action
                    </th>
                    <th className="px-5 py-5 text-left text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {phonebook
                    // ?.sort((a, b) => (a.Name > b.Name ? 1 : -1))
                    ?.map((el, index) => {
                      return (
                        <ContactCard
                          key={uniqueKey.next().value}
                          contactData={el}
                          sno={index + 1}
                          handleModal={() => handleModal(index)}
                          handleEdit={() => handleEdit(index)}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <h1 className="pt-10 text-[blue]">No Contacts</h1>
            </div>
            <div className="relative">
              <div className="absolute w-[200px] inset-0 m-auto text-center	">
                <Lottie animationData={NoContactAnimation} loop={true} />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Contacts;
