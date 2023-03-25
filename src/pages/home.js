import Header from "./header"
import ActionList from "./actionList"
import Roles from "./roles"
import Footer from "./footer"
import VoteLog from "./voteLog"

export default function Home () { return (
    <div className = "home">
        <Header/>
        <ActionList/>
        <Roles/>
        <VoteLog/>
        <Footer/>
    </div>
)
}