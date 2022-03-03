import React from 'react';
import "./Inspiration.scss"
import {cardData1,cardData2} from  '../../assets/data/data.js';

const Inspiration = () => {
    return(
        <div className="inspiration" id="inspiration">
            <div className="inspiration__title">
                <h1>INSPIRATION</h1>
            </div>

          <div className="inspiration-top">
              {cardData1.map((data, key)=> {
                  return(
                     <div className="card">
                         <img src={data.image} alt=""/>
                         <h6 key={key}>{data.title}</h6>
                         <p>{data.description}</p>
                     </div>
                  )
              })}
          </div>
            <div className="inspiration-bottom">
                {cardData2.map((data, key)=> {
                    return(
                        <div className="card">
                            <img src={data.image} alt=""/>
                            <h6 key={key}>{data.title}</h6>
                            <p>{data.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Inspiration;