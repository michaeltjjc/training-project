import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { makeStyles, Typography, TextLink, Button } from '@ellucian/react-design-system/core';

const useStyles = makeStyles()({
    card: {
        margin: `0 ${spacing40}`,
    }
});

const TrainingProjectCard = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.card}>
            <Typography variant="h2">
                New Title TrainingProject World
            </Typography>
            <Typography>
                <span>
                    For sample extensions, visit the Ellucian Developer
                </span>
                <TextLink href="https://github.com/ellucian-developer/experience-extension-sdk-samples" target="_blank">
                    GitHub
                </TextLink>
            </Typography>
            <Button
                color="primary"
                href="https://github.com/ellucian-developer/experience-extension-sdk-samples" target="_blank"
                size="default"
                variant="contained"
            >Click</Button>
        </div>
    );
};

export default TrainingProjectCard;
