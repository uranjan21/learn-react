import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CoreConcepts(prop) {
    return (
        <Card sx={{ maxWidth: 345 }} className='coreCard'>
            <CardMedia
                sx={{ height: 100 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title={prop.title}
            />
            <CardContent className='text-color'>
                <Typography className='text-color' gutterBottom variant="h5" component="div">
                    {prop.title}
                </Typography>
                <Typography className='text' variant="body2" color="text.secondary">
                    {prop.description}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button className='text' size="small">Learn more</Button>
            </CardActions> */}
        </Card>
    );
}