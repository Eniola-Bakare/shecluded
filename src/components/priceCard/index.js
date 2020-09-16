import React from 'react';
import numeral from "numeral";


const PriceCard = (props) => {
    const { value , style, text} = props
    return (
        text? ( <div style={{...style, textTransform: "capitalize"}} className="price-card-dd">
            
        {value}
    </div>): ( <div style={{...style}} className="price-card-dd">
            
            {"\u20A6"}
            {numeral(
                value
            ).format("0,0")}
        </div>)
       
    );
}

export default PriceCard;