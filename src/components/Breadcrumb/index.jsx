import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs({link, typography}) {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                {link.map((item) => {
                    return (
                        <Link
                            underline="hover"
                            color="inherit"
                            href={item.href}
                        >
                            {item.link}
                        </Link>
                    )
                })}
                <Typography color="text.primary">
                    {typography}
                </Typography>
            </Breadcrumbs>
        </div>
    );
}