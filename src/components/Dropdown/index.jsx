import Dropdown from 'react-bootstrap/Dropdown';
import * as React from "react";

export default function DropdownComponent({title,link}) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                {title}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {link.map((item) => {
                    return (
                        <Dropdown.Item href={item.href}>
                            {item.link}
                        </Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}