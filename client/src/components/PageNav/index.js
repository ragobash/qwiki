import React from "react";
import { Box, Paper, MenuList, MenuItem } from "@material-ui/core";

function PageNav(props) {
    return (
        <Box>
            <Paper className={classes.paper}>
                <MenuList>
                    {props.links.map(link => {
                        return <MenuItem>{link}</MenuItem>
                    })}
                </MenuList>
            </Paper>
        </Box>
    );
}

export default PageNav;