import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div className='container py-5'>
            <h1>Details</h1>
            <p>{serviceId}</p>
        </div>
    );
};

export default ServiceDetail;