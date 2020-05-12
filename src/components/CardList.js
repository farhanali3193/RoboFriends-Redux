import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const robots = props.robots;
    // if(true){
    //     throw new Error('NOOOOO');
    // }
    
    return (
        <div> 
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key = {user.id} 
                            id = { robots[i].id } 
                            name = { robots[i].name } 
                            email = { robots[i].email } 
                        />
                    );      
                })
            }
        </div>
    );
}

export default CardList;