'use client'

import React from 'react';
import { DownloadOutlined, FileTextOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Space, Row, Col } from 'antd';

export default function Home() {

  return (
    <div className='max-lg:mx-4 '>
      <div className="flex mt-4 mb-4 max-lg:flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className='max-lg:pb-4'> <h3>Page Title</h3></div>
        <div>

          <Row className='top_section' gutter={[{xs:5, md:16}, 7]} >
            <Col>
              <Button className='!flex items-center'>
                <span>Export to PDF</span> 
                <DownloadOutlined />
              </Button>
            </Col>
            <Col>
              <Button className='!flex items-center'>
                <span>Notes (3) </span> 
                
                <FileTextOutlined />
              </Button>
            </Col>
            <Col>
              <Button className='!flex items-center'>
                <span>Filter</span> 
                 
                <FilterOutlined />
              </Button>
            </Col>
          </Row>

        </div>
      </div>

      <Row gutter={[16,16]} justify="center">
        <Col xs={24}  md={12}>
          <div>This is left line chart</div>
        </Col>
        <Col xs={24} md={12}>
          <div>This is right pie chart</div>
        </Col>
      </Row>

    </div>
  )
}