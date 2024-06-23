import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from "next/link";
import { Tags } from "./Tags";

interface TutorialCardProps{
    id: string
    title: string
    username: string
    date: Date
    description: string
    imageUrl: string
    tags?: string[]
}

export function TutorialCard({id,title, username, date, description, imageUrl, tags}: TutorialCardProps) {
    return <Card className="drop-shadow-xl w-80 m-4 gap-0 p-0">
        <CardMedia
            component={"img"}
            alt={"Project Image"}
            image={imageUrl} 
            sx={{
                height: "200px"
            }}
            />
        <CardHeader
            action={<IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>}
            title={<h4 className="whitespace-nowrap overflow-x-auto bg-scroll w-64" style={{scrollbarWidth: "none"}}>{title}</h4>}
            subheader={
                <div className=" cursor-default">
                    by&ensp;
                    <Link href="/users/id" className=" text-secondary-700">{username}</Link>&ensp;-&ensp;
                    {date.toLocaleDateString()}
                </div>
            } 
        />

        <Tags tags={tags ?? []} className="m-auto"/>

        <CardContent>
            <Typography variant="body2" color="text.secondary" 
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "3",
                    WebkitBoxOrient: "vertical",
                }}
            >
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href={`/tutorials/${id}/view`}>Start Learning</Button>
        </CardActions>
    </Card>;
}



