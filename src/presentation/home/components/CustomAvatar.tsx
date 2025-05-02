import Image from 'next/image';
import AvatarImg from 'root/public/img/avatar350.png';

export const CustomAvatar = () => (
    <Image
        // src="/img/avatar350.png"
        src={AvatarImg}
        alt="Avatar o imagen personal"
        // width={350}
        // height={407}
        sizes="(max-width: 599px) 180px, (max-width: 1199px) 240px, 270px"
        style={{
            // width: '100%',
            height: 'auto',
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
        }}
        className='w-[270px] max-[599px]:w-[180px] max-[1199px]:w-[240px]'
        priority
    />
    // <div
    //     style={{
    //         backgroundImage: "url('/img/avatar380.png')",
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         width: '380px',
    //         height: '442px',
    //         maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
    //     }}
    // >
    // </div>
);
