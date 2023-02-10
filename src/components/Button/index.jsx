import Button from 'react-bootstrap/Button';

function ButtonComponents() {
    return (
        <div style={{textAlign:"center"}}>
            <h3>Buttons</h3>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>

            <h3>Outline Buttons</h3>
            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light">Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>

            <h3>Button Tags</h3>
            <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
            <Button as="input" type="button" value="Input" />{' '}
            <Button as="input" type="submit" value="Submit" />{' '}
            <Button as="input" type="reset" value="Reset" />



            <h3>Sizes</h3>
            <div className="mb-2">
                 <Button variant="primary" size="lg">
                     Large button
                 </Button>{' '}

                 <Button variant="secondary" size="lg">
                     Large button
                 </Button>
           </div>
           <div className="mb-2">
                  <Button variant="primary" size="lg">
                       Large button
                 </Button>{' '}

                 <Button variant="secondary" size="lg">
                        Large button
                 </Button>
           </div>

        </div>
    );
}

export default ButtonComponents;