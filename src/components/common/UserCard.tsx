import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export default function UserCard({ data }: { data: User }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={data.avatar}
        title={data.first_name + " " + data.last_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.first_name} {data.last_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/user/${data.id}`}>
          <Button size="large" variant="contained" sx={{ mb: 2 }}>
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
