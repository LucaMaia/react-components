import Accordion from 'react-bootstrap/Accordion';
import Link from "@mui/material/Link";

export default function AccordionComponent({link}) {
    return (
        <Accordion>
            {link.map((item,index) => {
                return (
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                            {item.title}
                        </Accordion.Header>

                        <Accordion.Body>
                            {item.text}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    );
}
