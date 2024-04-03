/* eslint-disable no-unused-vars */
import React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/chakra-ui";
import { useSort } from "@table-library/react-table-library/sort";
import { Box } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { nodes } from "../data";

const key = "Sort";
function BookingsTable() {
  const data = { nodes };

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(chakraTheme);

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
        TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
        COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
        TASKS: (array) =>
          array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
    {
      label: "Name",
      renderCell: (item) => item.name?.customerName,
      sort: { sortKey: "NAME" },
    },
    {
      label: "Trip Booked",
      renderCell: (item) => item.tripBooked,
      sort: { sortKey: "TRIP BOOKED" },
    },
    {
      label: "Trip Date",
      renderCell: (item) => item.tripDate,
      sort: { sortKey: "TRIP DATE" },
    },
    {
      label: "Email",
      renderCell: (item) => item.email,
      sort: { sortKey: "EMAIL" },
    },
    {
      label: "Phone Number",
      renderCell: (item) => item.phoneNumber,
      sort: { sortKey: "PHONE NUMBER" },
    },
    {
      label: "Price",
      renderCell: (item) => item.price,
      sort: { sortKey: "PRICE" },
    },
    {
      label: "Payment Status",
      renderCell: (item) => item.paymentStatus,
      sort: { sortKey: "PAYMENT STATUS" },
    },
    {
      label: "BOOKING STATUS",
      renderCell: (item) => item.bookingStatus,
      sort: { sortKey: "BOOKING STATUS" },
    },
  ];
  return (
    <>
      <Box p={3} borderWidth="1px" borderRadius="lg">
        <CompactTable columns={COLUMNS} data={data} sort={sort} theme={theme} />
      </Box>
    </>
  );
}

export default BookingsTable;
