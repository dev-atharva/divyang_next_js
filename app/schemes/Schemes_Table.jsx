"use client"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./Table.css";
import React, { useState } from "react";
import Modal from "./Modal"

const Schemes_Table = () => {
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
            <Tr>
                <Td id="tabledata">Special Education and vocational Training through Government institutions</Td>
                {/* <Td id="tabledata">Maharashtra</Td> */}
                <Td id="tabledata1">Hearing</Td>
                <Td id="tabledata2">Education</Td>
                <Td id="tabledata3" className="cursor-pointer"  onClick={handleViewMoreClick}>View More</Td>
            </Tr>
        </Tbody>
      </Table>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Schemes_Table;
