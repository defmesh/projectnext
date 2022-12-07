import Heading from './Components/Heading'
import Cards from './Components/Card'
import Service from './Components/Service'
import Cap from './Components/Cap'
import Portfolio from './Components/Portfolio'
const Home = () => {
   return (
      <>
         <Heading />
         <Cards isRounded={true} Text="shop for"  width="448" height="448" />
         <Cap />
         <Service />
         <Portfolio />
      </>
   )
}
export default Home;