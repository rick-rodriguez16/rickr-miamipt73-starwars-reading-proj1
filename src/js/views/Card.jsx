import React from 'react';

const style = {
    width: "20rem",
}

const Card = ({ id, name, imageURL }) => {

    return (
        <>
            <div className="card me-3 p-0 bg-dark" style={style}>
                <img
                    src={ 
                        name === "Tatooine"
                        ?
                        "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                        :
                        `${imageURL}/${id}.jpg`
                    } 
                    className="card-img-top border" alt="..." 
                />
                <div className="card-body text-center">
                    <h5 className="card-title my-2 text-light">{name}</h5>
                    <a href="#" className="btn btn-primary mt-2">More Info</a>
                </div>
            </div>
        </>
    );
}

export default Card;