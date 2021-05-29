import React from 'react'
import '../Styles/Categories.css'

import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

    import ArtTrackIcon from '@material-ui/icons/ArtTrack';

export const SimilarCat = () => {
    return (
        <div>
            <div className="categoriesText">
            <h4 className="categoryHeading"><ArtTrackIcon/> Similar Categories</h4>
            <ul type="none">
                <li><a href=""> Cloud Computing     <span className="categoryNumber" >22</span> </a></li>
                <li><a href=""> Artificial Intelligence <span  className="categoryNumber">22</span></a></li>
                <li><a href="">Machine Learning <span  className="categoryNumber" >22</span></a></li>
                <li><a href="">Web Development <span  className="categoryNumber">22</span></a></li>
            </ul>
    
            </div>
         
        </div>
 
        
    )
}
