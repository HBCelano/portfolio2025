import Image from 'next/image';
import { motion } from 'framer-motion';
import ImgContact from 'root/public/img/contact/dev6-Photoroom.png';

const MotionImage = motion.create(Image);

export const CustomMotionImage = () => (
    <MotionImage
        src={ImgContact}
        alt='Imagen de computadora'
        // width={350}
        // height={407}
        sizes='(max-width: 599px) 180px, (max-width: 1199px) 240px, 270px'
        style={{
            // width: '100%'
            height: 'auto'
        }}
        className='w-[270px] max-[599px]:w-[180px] max-[1199px]:w-[240px]'
        priority
        animate={{
            // rotate: 360
            // rotateX: [0, 360]
            rotateY: [0, 360]
            // rotateZ: [0, 360]
        }}
        transition={{
            repeat: 2,
            // repeatType: 'reverse',
            duration: 3,
            ease: "linear"
        }}
    />
);
