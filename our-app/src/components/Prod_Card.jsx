import React from "react";
import "../App.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function EthComp(props)
{
    return(
      <div className="row p-2 bg-white border rounded mt-2">
      <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={props.image} alt=''/></div>
      <div className="col-md-6 mt-1">
          <h5>{props.prodName}</h5>
          <div className="d-flex flex-row">
              <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
          </div>
          <div className="mt-1 mb-1 spec-1"><span>{props.span1}</span><span className="dot"></span><span>{props.span2}</span><span className="dot"></span><span>{props.span4}<br /></span></div>
          <div className="mt-1 mb-1 spec-1"><span>{props.span4}</span><span className="dot"></span><span>{props.span5}</span><span className="dot"></span><span>{props.span6}<br /></span></div>
          <p className="text-justify text-truncate para mb-0">{props.para}<br /><br /></p>
      </div>
      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
          <div className="d-flex flex-row align-items-center">
              <h4 className="mr-1"><CurrencyRupeeIcon />{props.presAmount}</h4><span className="strike-text"><CurrencyRupeeIcon />{props.prevAmount}</span>
          </div>
          <h6 className="text-success">Free shipping</h6>
          <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
      </div>
  </div>
    );
}

export default EthComp;