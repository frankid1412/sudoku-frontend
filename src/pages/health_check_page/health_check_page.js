import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../config/config.js';

const HealthCheckPage = () => {
  const [healthStatus, setHealthStatus] = useState('not connected');
  const [URL] = useState(`${config.BACKEND_ENDPOINT}/api/v1/customer/health`)


  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setHealthStatus(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching health status: ${error}`);
      });
  }, [URL]);

  return (
    <div>
      <h1>Health Status</h1>
      <h2>Server Health: {healthStatus}</h2>
      <h2>URL: {URL}</h2>
      <h2>Shouzhi Fang, working in Black Cow Tech</h2>
    </div>
  );
};

export default HealthCheckPage;