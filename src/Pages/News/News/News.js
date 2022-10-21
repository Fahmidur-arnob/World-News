import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const News = () => {
    const news = useLoaderData();
    const { title, author, details, image_url, category_id } = news;
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">See All</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;