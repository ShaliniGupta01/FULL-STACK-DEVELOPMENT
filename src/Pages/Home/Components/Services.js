import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import service1 from '../../../assets/service1.jpg'
import service2 from '../../../assets/service2 .jpg'
import service3 from '../../../assets/service3 .jpg'
import service4 from '../../../assets/service4.jpg'


const Services = () => {


  return (
    <>
      <h1 className="heading" style={{ textAlign: 'center', margin: ' 0  1rem' }}>Our Services</h1>
      <section className="services" style={{ maxWidth: '800px', margin: '0 auto' }}>
       <Swiper
         modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={4}
       >
        <SwiperSlide>
           <img src={service1} alt="Service 1" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover', display:'block', position:'relative' }} />
        </SwiperSlide>
         <SwiperSlide>
            <img src={service2} alt="Service 2" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover' , display:'block' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={service3} alt="Service 3" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={service4} alt="Service 4" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
            <SwiperSlide>
            <img src={service4} alt="Service 4" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
            <SwiperSlide>
            <img src={service2} alt="Service 2" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={service3} alt="Service 3" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
            <SwiperSlide>
           <img src={service1} alt="Service 1" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover' }} />
        </SwiperSlide>
         <SwiperSlide>
            <img src={service2} alt="Service 2" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={service3} alt="Service 3" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={service4} alt="Service 4" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
            <SwiperSlide>
            <img src={service4} alt="Service 4" style={{ width: '100%', borderRadius: '10px', height: '300px', objectFit:'cover'  }} />
          </SwiperSlide>
       </Swiper>
           
      </section>
    </>
  );
};

export default Services;



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import service1 from '../../../assets/service1.jpg';
// import service2 from '../../../assets/service2.jpg';
// import service3 from '../../../assets/service3.jpg';

// const Services = () => {
//   return (
//     <>
//       <h1 className="heading" style={{ textAlign: 'center', margin: '1rem 0' }}>Our Services</h1>
//       <section className="services" style={{ maxWidth: '800px', margin: '0 auto' }}>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//         >
//           <SwiperSlide>
//             <img src={service1} alt="Service 1" style={{ width: '100%', borderRadius: '10px' }} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={service2} alt="Service 2" style={{ width: '100%', borderRadius: '10px' }} />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={service3} alt="Service 3" style={{ width: '100%', borderRadius: '10px' }} />
//           </SwiperSlide>
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default Services;
