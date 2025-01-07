// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// const DashboardPage = () => {
//   const searchParams = useSearchParams();
//   const [currentDate, setCurrentDate] = useState('01-01-2025');
//   const [dashboardData, setDashboardData] = useState(null);
//   const [error, setError] = useState(null);

//   // Simulated data fetch based on date
//   useEffect(() => {
//     const date = searchParams.get('date') || '01-01-2025';
//     setCurrentDate(date);
    
//     // Simulate API call with error handling
//     fetch('/api/dashboard?date=' + date)
//       .then(res => res.json())
//       .then(data => setDashboardData(data))
//       .catch(err => setError('Failed to fetch data.'));
//   }, [searchParams]);

//   if (error) return <div className="text-red-500">{error}</div>;
//   if (!dashboardData) return <div>Loading...</div>;

//   // Format currency values
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat('en-IN').format(amount);
//   };

//   return (
//     <div className="p-6 space-y-6">
//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Total Sales</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">₹{formatCurrency(dashboardData.total_sales)}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Total Expenses</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">₹{formatCurrency(dashboardData.total_expenses)}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Net Profit</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">₹{formatCurrency(dashboardData.net_profit)}</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Supplier vs Customer Records</CardTitle>
//           </CardHeader>
//           <CardContent className="h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={dashboardData.supplier_records}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="bags" stroke="#8884d8" name="Supplier Bags" />
//                 <Line 
//                   type="monotone" 
//                   data={dashboardData.customer_records}
//                   dataKey="bags" 
//                   stroke="#82ca9d" 
//                   name="Customer Bags" 
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Top Selling Products</CardTitle>
//           </CardHeader>
//           <CardContent className="h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={dashboardData.top_selling_products}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="item" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="weight" stroke="#8884d8" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Tables Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Supplier Payments</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Farmer Name</TableHead>
//                   <TableHead>Net Amount</TableHead>
//                   <TableHead>Status</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {dashboardData.supplier_payments.map((payment, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{payment.farmer_name}</TableCell>
//                     <TableCell>₹{formatCurrency(payment.net_amount)}</TableCell>
//                     <TableCell>
//                       <span className={`px-2 py-1 rounded-full text-sm ${payment.payment_status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
//                         {payment.payment_status}
//                       </span>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Customer Payments</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Customer Name</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Payment Mode</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {dashboardData.customer_payments.map((payment, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{payment.customer_name}</TableCell>
//                     <TableCell>₹{formatCurrency(payment.paid_amount)}</TableCell>
//                     <TableCell>{payment.payment_mode}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


import React from 'react'

const page = () => {
  return (
    <div>
      hi
    </div>
  )
}

export default page
