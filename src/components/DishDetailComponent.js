import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import React, {Component} from 'react';


class DishDetail extends Component{
    renderDish(){
        const dish = this.props.selectedDish;
        if (dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComment(dish){
        if(dish!=null){
            const comment = dish.comments.map((com)=>{
            return(
                <ul key={com.id} className='list-unstyled'>
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            -- {com.author}, { }
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric' 
                                }).format(new Date(com.date))
                            }
                        </li>
                    </ul>
            )
        })
        return(
            <div className='p-3'>
                <h4>Comments</h4>
                {comment}
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }

    }

    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    {this.renderDish()}
                </div>
                <div className="col-md-6">
                    {this.renderComment(this.props.selectedDish)}
                </div>
            </div>
        )
    }
}
export default DishDetail;

