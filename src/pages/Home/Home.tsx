import DashBoard from '../../components/DashBoard/DashBoard'
import Login from '../../components/Login/Login'
import { HomeBackground } from './HomeStyle'


type HomeProps = {}

const Home = (props: HomeProps) => {
  return (
    <>
    {localStorage.token !== undefined && localStorage.token !== "" ?
      <DashBoard name={''} ship_name={''}/>
    :
      <HomeBackground>
        <Login/>
      </HomeBackground>
    }

    </>
  )
}

export default Home
