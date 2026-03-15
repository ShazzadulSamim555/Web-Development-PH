import React from 'react';
import { Line, LineChart } from 'recharts';

const ResultData=[
  {
    "id": 1,
    "name": "Arif Hossain",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Sumaiya Akter",
    "physics": 72,
    "chemistry": 88,
    "math": 75
  },
  {
    "id": 3,
    "name": "Rakib Uddin",
    "physics": 90,
    "chemistry": 82,
    "math": 95
  },
  {
    "id": 4,
    "name": "Mehedi Hasan",
    "physics": 65,
    "chemistry": 70,
    "math": 68
  },
  {
    "id": 5,
    "name": "Nusrat Jahan",
    "physics": 88,
    "chemistry": 91,
    "math": 84
  },
  {
    "id": 6,
    "name": "Sajid Islam",
    "physics": 74,
    "chemistry": 65,
    "math": 80
  },
  {
    "id": 7,
    "name": "Fatima Zohra",
    "physics": 95,
    "chemistry": 94,
    "math": 98
  },
  {
    "id": 8,
    "name": "Tanvir Ahmed",
    "physics": 60,
    "chemistry": 62,
    "math": 55
  },
  {
    "id": 9,
    "name": "Lamiyea Islam",
    "physics": 82,
    "chemistry": 85,
    "math": 89
  },
  {
    "id": 10,
    "name": "Kamrul Hasan",
    "physics": 70,
    "chemistry": 75,
    "math": 72
  }
]

const ResultCharts = () => {
    return (
        <div>
            <LineChart width={600} height={500} data={ResultData}>
                <Line dataKey="physics"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;