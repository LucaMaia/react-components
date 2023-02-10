import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "@mui/material/Link";

export default function Cards({link, color, width}) {
    return (
        <Card sx={{ maxWidth: parseInt(width) }} style={{backgroundColor:color}}>
            {link.map((item) => {
                return (
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={item.height}
                            image={item.image}
                            alt={item.alt}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                )
            })}
        </Card>
    );
}