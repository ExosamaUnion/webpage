import Header from "./header"
import ActionList from "./actionList"
import Roles from "./roles"
import VoteLog from "./voteLog"
import VoterLog from "./voterLog"
import Footer from "./footer"

export default function Home () { return (
    <div className = "home">
        <Header/>
        <ActionList/>
        <Roles/>
        <VoteLog/>
        <VoterLog/>
        <Footer/>
    </div>
)
}