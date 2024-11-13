import React from 'react';
import Card from './Card.jsx';

const CardList = ({ array, imageURL }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {
                    array.map(item => {
                        return (
                            <Card 
                                key={item.uid}
                                id={item.uid}
                                name={item.name}
                                imageURL={imageURL}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default CardList;
