import React from 'react'
import blogImage from '../assets/technical.jpeg'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

import '../Styles/BlogImage.css'

export const BlogImage = () => {
    return (
        <div>
            <Card className="round card">
                <CardImg className="round"  top width="50%" src={blogImage} alt="Card image cap" />
            </Card>

        </div>
    )
}
