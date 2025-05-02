'use client';

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CustomSectionInfo = ({ title, date, subtitle1, subtitle2 }: { title: string, date: string, subtitle1: string, subtitle2?: string }) => {
    const isUpSM = useMediaQuery('(min-width:600px)');

    return (
        <Box
            component='section'
        >
            <Box
                component='div'
                display='flex'
                justifyContent='space-between'
                // alignItems='center'
                columnGap={2}
                mb={2}
            >
                <Typography component='h5' variant={isUpSM ? 'h5' : 'subtitle1'} fontWeight={300} className="uppercase">{title}</Typography>
                <Typography component='span' variant='body2' color="textSecondary" textAlign='end'>{date}</Typography>
            </Box>
            <Typography component='h6' variant={isUpSM ? 'h6' : 'subtitle1'} fontWeight={200}>{subtitle1}</Typography>
            {subtitle2 && <Typography component='span' variant='body2' color="textSecondary">{subtitle2}</Typography>}
        </Box>
    );
};
