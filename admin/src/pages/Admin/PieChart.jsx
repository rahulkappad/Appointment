import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { AdminContext } from '../../context/AdminContext';

const PieChart = () => {
  const { dashData } = useContext(AdminContext);
  const [filteredData, setFilteredData] = useState([]);
  const [speciality, setSpeciality] = useState('');
  const [doctor, setDoctor] = useState('');
  const [chartData, setChartData] = useState(null);

  // Initialize filtered data with all appointments
  useEffect(() => {
    if (dashData) {
      setFilteredData(dashData.latestAppointments || []);
    }
  }, [dashData]);

  // Filter the data based on selected filters
  useEffect(() => {
    if (dashData?.latestAppointments) {
      const filtered = dashData.latestAppointments.filter((appointment) => {
        const matchesSpeciality = speciality
          ? appointment.docData.speciality === speciality
          : true;
        const matchesDoctor = doctor
          ? appointment.docData.name === doctor
          : true;
        return matchesSpeciality && matchesDoctor;
      });
      setFilteredData(filtered);
    }
  }, [speciality, doctor, dashData]);

  // Prepare data for the chart
  useEffect(() => {
    if (filteredData.length) {
      const labels = filteredData.map((item) => item.slotDate);
      const data = filteredData.map((item) => item.slotTime);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Appointments Over Time',
            data,
            borderColor: '#42A5F5',
            backgroundColor: 'rgba(66, 165, 245, 0.4)',
            tension: 0.4,
          },
        ],
      });
    } else {
      setChartData(null); // Clear chart data if no data matches filters
    }
  }, [filteredData]);

  return (
    <div className='m-5'>
      <h2 className='text-2xl font-semibold mb-4'>Line Chart</h2>

      {/* Filters */}
      <div className='mb-4 flex gap-4'>
        <select
          className='border p-2'
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
        >
          <option value=''>Filter by Speciality</option>
          {dashData?.specialities?.map((spec, index) => (
            <option key={index} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <select
          className='border p-2'
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        >
          <option value=''>Filter by Doctor</option>
          {dashData?.doctorsList?.map((doc, index) => (
            <option key={index} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chart */}
      {chartData ? (
        <div className='bg-white p-4 border rounded'>
          <Line
            data={chartData}
            options={{
              responsive: true,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Date',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Time',
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
              },
            }}
          />
        </div>
      ) : (
        <p>No data available for the selected filters.</p>
      )}
    </div>
  );
};

export default PieChart;
