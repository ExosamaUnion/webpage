export default function VoteLog () { return (
    <div className = "container">
        <h3>VOTE LOG</h3>
        <table className ="voteTable">
            <tr>
                <th>NUMBER</th>
                <th>SUBJECT</th>
                <th>YAY:NAY:ABSTAIN</th>
            </tr>
            <tr>
                <td><a href="https://twitter.com/ExosamaUnion/status/1639401819125186560">#1</a></td>
                <td>Voting Via Twitter Comments</td>
                <td>16:0:1</td>
            </tr>
        </table>
    </div>
)
}