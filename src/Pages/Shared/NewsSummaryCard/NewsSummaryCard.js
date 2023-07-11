import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark, FaShareNodes } from "react-icons/fa6";
const NewsSummaryCard = ({ news }) => {
    const { author, category_id, details, image_url, title, total_view, _id } = news;
    console.log(news);
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircleo
                        className='me-2'
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareNodes></FaShareNodes>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 300 ?
                            <p>{details.slice(0, 300) + '....'}<Link to={`/news/${_id}`}>Read more</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

    );
};

export default NewsSummaryCard;