import React, { useState } from 'react';
import { Card, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import './brandList.css';

const BrandListmain = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardClick = (title) => {
    console.log('Navigating to path for:', title);
    navigate(`/prototype`);
  };

  return (
    <div className="icon-array1">
      <Space size={24}>
        {[
          { title: 'DIESEL', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F000019YzxzQAC/d-17710e79-e7f2-4606-9e1c-6ab7f618ec65.jpeg' },
          { title: 'ALDO', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F000019YzyBQAS/d-14bdf667-cfe2-4a43-b2fd-9c3f4deeffba.jpeg' },
          { title: 'Adidas', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F00001hgT0AQAU/d-6bc6e456-af43-4924-8723-320f681abfad.jpeg' },
          { title: 'Mango', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F000019Yzy8QAC/d-86cb9f21-94af-40d3-b620-70c497ca77b4.jpeg' },
          { title: 'Lovi', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F000019YzySQAS/d-d92b5962-9e2d-4816-a6ae-98c3a627390e.jpeg' },
          { title: 'Waves', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F00001hgTJhQAM/d-180e88e5-4001-4226-96fb-5af481e4fe18.jpeg' },
          { title: 'Calvin klein', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F00002LvkkeQAB/d-523bc5af-a777-4f05-a3cc-4538c24ce453.jpeg' },
          { title: 'D-BLAQ', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F000019YzygQAC/d-e7f48ef4-d6b5-4cb8-8cf3-524b4691392f.jpeg' },
          { title: 'Rolex', icon: 'https://shangriladirectorydev.s3.amazonaws.com/directory/0017F00001hgT6NQAU/d-edbce69e-2bc3-472d-90ee-474faa3ccdb6.jpeg' }
          
        ].map((item, index) => (
          <Card
          key={index}
          hoverable
          style={{ width: 120, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }} // Add box-shadow property here
          cover={<img alt={item.title} src={item.icon} />}
          onClick={() => handleCardClick(item.title)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={hoveredIndex === index ? "hovered-card" : ""}
        >
            {item.title}
          </Card>
        ))}
      </Space>
    </div>
  );
}

export default BrandListmain;
