import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Col,
    Media,
} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">New Contact</Nav.Link>
                        <Nav.Link href="#pricing">More Info</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-info">GooGle it !</Button>
                    </Form>
                </Navbar>
                <div id="milieu">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    defaultValue="Choose..."
                                >
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="I accept the rules"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div id="lisar">
                    <Media>
                        <img
                            width={600}
                            height={400}
                            src="https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Highest-Paying-Skills-App-Developer.jpg"
                            alt="Generic placeholder"
                        />
                    </Media>
                    <div className="laptop">
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                        <img
                            src="https://www.intel.la/content/dam/www/public/us/en/images/photography-consumer/rwd/gaming/a1041986-laptop-styles-rwd.jpg.rendition.intel.web.480.270.jpg"
                            alt="laptop"
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
