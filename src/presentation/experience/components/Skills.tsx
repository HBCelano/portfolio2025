import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const skills = [
    {
        img: '/img/skills/html5.svg',
        name: 'HTML'
    },
    {
        img: '/img/skills/css.svg',
        name: 'CSS'
    },
    {
        img: '/img/skills/bootstrap.svg',
        name: 'Bootstrap'
    },
    {
        img: '/img/skills/tailwindcss.svg',
        name: 'Tailwind CSS'
    },
    {
        img: '/img/skills/js.svg',
        name: 'JavaScript'
    },
    {
        img: '/img/skills/ts.svg',
        name: 'TypeScript'
    },
    {
        img: '/img/skills/jquery.svg',
        name: 'jQuery'
    },
    {
        img: '/img/skills/react.svg',
        name: 'React'
    },
    {
        img: '/img/skills/nextjs.svg',
        name: 'NextJS',
        theme: true
    },
    {
        img: '/img/skills/react.svg',
        name: 'React Native'
    },
    {
        img: '/img/skills/expo.svg',
        name: 'Expo',
        theme: true
    },
    {
        img: '/img/skills/python.svg',
        name: 'Python'
    },
    {
        img: '/img/skills/flask.svg',
        name: 'Flask',
        theme: true
    },
    {
        img: '/img/skills/php.svg',
        name: 'PHP'
    },
    {
        img: '/img/skills/mysql.svg',
        name: 'MySQL'
    },
    {
        img: '/img/skills/postgresql.svg',
        name: 'PostgreSQL'
    },
    {
        img: '/img/skills/git.svg',
        name: 'Git'
    },
    {
        img: '/img/skills/github.svg',
        name: 'GitHub',
        theme: true
    }
];

const SkillCard = ({ imgSrc, title, desc, theme }: { imgSrc: string, title: string, desc?: string, theme?: boolean }) => {
    const { palette: { mode } } = useTheme();

    return (
        <Box
            component='section'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Image
                src={imgSrc}
                alt='Imagen de Habilidad'
                width={120}
                height={120}
                style={{ filter: mode === 'dark' && theme ? 'invert(1)' : 'none' }}
            />
            <Typography component='h4' variant='h5' className='text-center' mt={2} fontWeight={200}>{title}</Typography>
            {desc &&
                <Typography component='span' variant='body2' color='textSecondary' className='text-center' my={2}>{desc}</Typography>
            }
        </Box>
    );
};

const Skills = () => (
    <Box
        component='section'
        sx={{
            // display: 'flex',
            // justifyContent: 'center',
            // flexWrap: 'wrap',
            // gap: 10,
            mt: 6
        }}
    >
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1000 }}
            loop
            // spaceBetween={5}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                350: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3
                },
                900: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 6
                }
            }}
        // style={{ height: '100%' }}
        >
            {
                skills.map((skill, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <SkillCard
                            imgSrc={skill.img}
                            title={skill.name}
                            theme={skill.theme}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </Box>
);

export { Skills };
