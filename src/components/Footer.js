import React from 'react';
var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}



class Footer extends React.Component {
  render() {
    return (
   <div style={{ paddingTop: '100px' }} >
  	<footer className="footer fixed">
<div className="container bottom_border">
<div className="row">
<div className=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>

<p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
<p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
<p><i className="fa fa-phone"></i>  +91-9999878398  </p>
<p><i className="fa fa fa-envelope"></i> info@example.com  </p>


</div>


<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

<ul className="footer_ul_amrc">
<li><a href="#">Image Rectoucing</a></li>
<li><a href="#">Clipping Path</a></li>
<li><a href="#">Hollow Man Montage</a></li>
<li><a href="#">Ebay & Amazon</a></li>
<li><a href="#">Hair Masking/Clipping</a></li>
<li><a href="#">Image Cropping</a></li>
</ul>

</div>


<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>

<ul className="footer_ul_amrc">
<li><a href="#">Remove Background</a></li>
<li><a href="#">Shadows & Mirror Reflection</a></li>
<li><a href="#">Logo Design</a></li>
<li><a href="#">Vectorization</a></li>
<li><a href="#">Hair Masking/Clipping</a></li>
<li><a href="#">Image Cropping</a></li>
</ul>

</div>
</div>
</div>


<div className="container">
<ul className="foote_bottom_ul_amrc">
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact</a></li>
</ul>

<p className="text-center">Copyright @2017 | Designed With by <a href="#">Your Company Name</a></p>

</div>

</footer>
</div>
    );
  }
}

export default Footer;