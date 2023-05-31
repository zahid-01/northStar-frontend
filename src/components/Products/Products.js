// import React, { useState } from "react";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// import classes from "./Product.module.css";
// // import img1 from "../../Assets/Imgs/p1.jpg";
// // import img2 from "../../Assets/Imgs/p2.jpg";
// // import img3 from "../../Assets/Imgs/p3.jpg";
// const Product = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const images = [img1, img2, img3];
//   const prevImage = () => {
//     setCurrentImage((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//   const nextImage = () => {
//     setCurrentImage((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <>
//       <div className={classes.productCont}>
//         <div className={classes.corousel}>
//           <img
//             src={images[currentImage]}
//             alt={`Image ${currentImage + 1}`}
//             className={classes.carouselimage}
//           />
//           <div className={classes.productBtn}>
//             <button onClick={prevImage} className={classes.corouselbutton}>
//               Prev
//             </button>
//             <button onClick={nextImage} className={classes.corouselbutton}>
//               Next
//             </button>
//           </div>
//         </div>
//         <div className={classes.desCont}>
//           <p className={classes.description}>
//             A laptop, sometimes called a notebook computer by manufacturers, is
//             a battery- or AC-powered personal computer (PC) smaller than a
//             briefcase. A laptop can be easily transported and used in temporary
//             spaces such as on airplanes, in libraries, temporary offices and at
//             meetings.
//           </p>
//           <div className={classes.productPrice}>
//             <p className={classes.price}>&#8377; 50,000</p>
//             <div className={classes.productBtn}>
//               <button className={classes.btn}>Add to Cart</button>
//               <button className={classes.btn}>Buy Now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Product;
