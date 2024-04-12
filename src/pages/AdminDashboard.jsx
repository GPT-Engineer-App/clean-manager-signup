import React, { useEffect, useState } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

const AdminDashboard = () => {
  const [cleaners, setCleaners] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [sales, setSales] = useState(0);
  const [profit, setProfit] = useState(0);
  const [salesData, setSalesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profitResponse = await fetch("/api/profit");
        const profitData = await profitResponse.json();
        setProfit(profitData.totalProfit);

        const salesChartResponse = await fetch("/api/sales-chart");
        const salesChartData = await salesChartResponse.json();
        setSalesData(salesChartData);
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

      {}
      <Box display="flex" justifyContent="space-around" mb={8}>
        <Stat>
          <StatLabel>총 매출</StatLabel>
          <StatNumber>{sales.toLocaleString()}원</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>총 수익</StatLabel>
          <StatNumber>{profit.toLocaleString()}원</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>총 고객 수</StatLabel>
          <StatNumber>{customers.length}명</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>총 청소매니저 수</StatLabel>
          <StatNumber>{cleaners.length}명</StatNumber>
        </Stat>
      </Box>

      {}
      <Box mb={8}>
        <Line data={salesData} />
      </Box>

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
    </Box>
  );
};
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
    </Box>
  );
};

export default AdminDashboard;
