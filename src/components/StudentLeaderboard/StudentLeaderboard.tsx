import RowItem from './RowItem'
import Hetti from "../../assets/Hetti.png";
import { Card, CardContent } from '@mui/material'

const StudentLeaderboard = () => {
  return (
    <Card sx={{
        width: "500px"
    }}>
        <CardContent>
            <RowItem name="Jesse Thomas" points={637} percentage={98} rank={1} position='promote' avatar={Hetti} />
            <RowItem name="Jesse Thomas" points={637} percentage={98} rank={2} position='demote' avatar={Hetti} />
            <RowItem name="Jesse Thomas" points={637} percentage={98} rank={3} position='flat' avatar={Hetti} />
        </CardContent>
    </Card>
  )
}

export default StudentLeaderboard