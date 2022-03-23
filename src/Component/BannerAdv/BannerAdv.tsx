import * as React from 'react';
import './BannerAdv.scss';
// import BannerAdv_1 from '../../Assets/images/BannerAdv/resource.png'

function BannerAdv(props:any) {

  const {BannerAdvImg,bg} =props
    return (
      <div className='BannerAdv' style={{background:`${bg}`}}>
          <img src={BannerAdvImg} alt="" />
      </div>
    );
}

export default BannerAdv;