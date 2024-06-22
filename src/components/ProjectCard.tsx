import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ProjectCardProps{
    title: string
    username: string
    date: string
    description: string
    imageUrl: string
}

export function ProjectCard({title, username, date, description, imageUrl}: ProjectCardProps) {
    return <Card className="drop-shadow-xl w-80 m-4">
        <CardMedia
            component={"img"}
            alt={"Project Image"}
            height={"100"}
            image={imageUrl} />
        <CardHeader
            action={<IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>}
            title={<h4>{title}</h4>}
            subheader={<div>by {username} - {date}</div>} />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Start Learning</Button>
        </CardActions>
    </Card>;
}
