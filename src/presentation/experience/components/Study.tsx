import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { CustomSectionInfo } from "./CustomSectionInfo";

const Study = () => {
    const { t } = useTranslation();

    return (
        <Box
            component='section'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                mt: 4
            }}
        >
            <Box
                component='section'
                display='flex'
                flexDirection='column'
                p={2}
                className="border-1 border-gray-400 rounded-lg gap-4"
            >
                <CustomSectionInfo
                    title={t('main.experience.studies.customSectionInfo1.title')}
                    date={t('main.experience.studies.customSectionInfo1.date')}
                    subtitle1={t('main.experience.studies.customSectionInfo1.subtitle1')}
                    subtitle2={t('main.experience.studies.customSectionInfo1.subtitle2')}
                />
                <Divider />
                <CustomSectionInfo
                    title={t('main.experience.studies.customSectionInfo2.title')}
                    date={t('main.experience.studies.customSectionInfo2.date')}
                    subtitle1={t('main.experience.studies.customSectionInfo2.subtitle1')}
                    subtitle2={t('main.experience.studies.customSectionInfo2.subtitle2')}
                />
            </Box>
        </Box>
    );
};

export { Study };
