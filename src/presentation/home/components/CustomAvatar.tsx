// import Image from 'next/image';

export const CustomAvatar = () => (
    // <Image
    //     src="/img/avatar380.png"
    //     width={380}
    //     height={442}
    //     alt="Avatar o imagen personal"
    // />
    <div
        style={{
            backgroundImage: "url('/img/avatar380.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '380px',
            height: '442px',
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
        }}
    >
    </div>
);
