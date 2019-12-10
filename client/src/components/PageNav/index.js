import React from "react";
import { Box, Paper, MenuList, MenuItem } from "@material-ui/core";

function PageNav(props) {
    return (
        <Box>
            <Paper>
                <MenuList>
                    {props.links.length > 0 && props.links.map(link => {
                        return <MenuItem>{link}</MenuItem>
                    })}
                </MenuList>
            </Paper>
        </Box>
    );
}

export default PageNav;