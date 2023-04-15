import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../hooks/useAxios'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import Layout from '../components/layout'

const useStyles = makeStyles({
  card: {
    Width: 250,
    display: 'flex',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const User = () => {
  const params = useParams()
  const { id } = params
  const classes = useStyles()
  const navigate = useNavigate()

  const { isLoading, data: usersData } = useQuery(['usersList', id], () => getUser(id), {
    staleTime: 20000,
  })

  if (isLoading) {
    return <h2>Loading....</h2>
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Layout>
      <Button variant='contained' onClick={goBack} sx={{ my: 5 }}>
        Back
      </Button>
      <Card className={classes.card}>
        <CardMedia
          sx={{ height: 250, width: 250 }}
          image={usersData?.avatar}
          title={usersData?.first_name + ' ' + usersData?.last_name}
        />
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            User Information
          </Typography>
          <Typography variant='h5' component='h2'>
            {usersData?.first_name} {usersData?.last_name}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            Email: {usersData?.email}
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default User
