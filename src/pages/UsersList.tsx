import React, { useState } from "react"
import { useQuery } from "react-query"
import UserCard from "../components/common/UserCard"
import Pagination from "@mui/material/Pagination"
import { getUsers } from "../hooks/useAxios"
import { Grid } from "@mui/material"
import Layout from "../components/layout"

const UsersList = () => {
  const [page, setPage] = useState<number>(1)
  const { isLoading, data: usersData } = useQuery(
    ["usersList", page],
    () => getUsers(page),
    {
      keepPreviousData: true,
      staleTime: 20000,
    }
  )

  if (isLoading) {
    return <h2>Loading....</h2>
  }
  const handleChange = (event: any, value: number) => {
    console.log(event)
    setPage(value)
  }

  return (
    <Layout>
      <Grid container spacing={3} sx={{ px: 3, my: 3 }}>
        {usersData?.data.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={3}>
            <UserCard data={user} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={usersData?.total_pages}
        page={page}
        onChange={handleChange}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", mt: 5 }}
      />
    </Layout>
  )
}

export default UsersList
