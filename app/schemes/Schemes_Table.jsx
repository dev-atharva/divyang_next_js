"use client";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./Table.css";
import React, { useState } from "react";
import Modal from "./Modal";

const Schemes_Table = ({ schemes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-w-[100vw]">
      <Table id="table_schemes">
        <Thead>
          <Tr>
            <Th style={{ "text-align": "center" }}>Name</Th>
            {/* <Th style={{ "text-align": "center" }}>Funding</Th> */}
            <Th style={{ "text-align": "center" }}>Beneficiary</Th>
            <Th style={{ "text-align": "center" }}>Type</Th>
            <Th style={{ "text-align": "center" }}>More</Th>
          </Tr>
        </Thead>
        <Tbody>
          {schemes?.map((scheme) => (
            <>
              <Tr key={scheme._id}>
                <Td id="tabledata">{scheme.name}</Td>

                <Td id="tabledata1">
                  <div className="flex flex-col gap-2">
                    {scheme.beneficiary.map((benefactor, id) => (
                      <div className="text-black font-normal" key={id}>
                        {benefactor}
                      </div>
                    ))}
                  </div>
                </Td>
                <Td id="tabledata2">{scheme.type}</Td>
                <Td
                  id="tabledata3"
                  className="cursor-pointer"
                  onClick={handleViewMoreClick}
                >
                  View More
                </Td>
              </Tr>
              <Modal scheme={scheme} isOpen={isModalOpen} onClose={handleCloseModal} />
            </>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Schemes_Table;
