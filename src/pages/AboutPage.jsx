
import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <h1>AboutPage</h1>
            <p>This is a React app to leave feedback for a product or service.</p><br />
            <p>© 2022, Dehui Yu</p>
            <Link to="/">Back to home</Link>
        </Card >
    )
}



export default AboutPage
