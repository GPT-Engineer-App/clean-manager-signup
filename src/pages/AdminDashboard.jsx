import React, { useEffect, useState } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const AdminDashboard = () => {
  const [cleaners, setCleaners] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [sales, setSales] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cleanersResponse = await fetch("/api/cleaners");
        const cleanersData = await cleanersResponse.json();
        setCleaners(cleanersData);

        const customersResponse = await fetch("/api/customers");
        const customersData = await customersResponse.json();
        setCustomers(customersData);

        const reservationsResponse = await fetch("/api/reservations");
        const reservationsData = await reservationsResponse.json();
        setReservations(reservationsData);

        const paymentsResponse = await fetch("/api/payments");
        const paymentsData = await paymentsResponse.json();
        setPayments(paymentsData);

        const salesResponse = await fetch("/api/sales");
        const salesData = await salesResponse.json();
        setSales(salesData.totalSales);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Heading size="xl" mb={8}>
        관리자 대시보드
      </Heading>
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          청소매니저 목록
        </Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>이름</Th>
              <Th>연락처</Th>
              <Th>이메일</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cleaners.map((cleaner) => (
              <Tr key={cleaner.id}>
                <Td>{cleaner.name}</Td>
                <Td>{cleaner.phone}</Td>
                <Td>{cleaner.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          고객 목록
        </Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>이름</Th>
              <Th>연락처</Th>
              <Th>이메일</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Tr key={customer.id}>
                <Td>{customer.name}</Td>
                <Td>{customer.phone}</Td>
                <Td>{customer.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          예약 목록
        </Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>고객명</Th>
              <Th>청소매니저</Th>
              <Th>예약일시</Th>
              <Th>상태</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.map((reservation) => (
              <Tr key={reservation.id}>
                <Td>{reservation.customerName}</Td>
                <Td>{reservation.cleanerName}</Td>
                <Td>{reservation.reservationDateTime}</Td>
                <Td>{reservation.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box mb={8}>
        <Heading size="lg" mb={4}>
          결제 내역
        </Heading>
        <Table>
          <Thead>
            <Tr>
              <Th>고객명</Th>
              <Th>청소매니저</Th>
              <Th>금액</Th>
              <Th>결제일시</Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment) => (
              <Tr key={payment.id}>
                <Td>{payment.customerName}</Td>
                <Td>{payment.cleanerName}</Td>
                <Td>{payment.amount.toLocaleString()}원</Td>
                <Td>{payment.paymentDateTime}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box>
        <Heading size="lg" mb={4}>
          매출 현황
        </Heading>
        <Text fontSize="xl">총 매출: {sales.toLocaleString()}원</Text>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
