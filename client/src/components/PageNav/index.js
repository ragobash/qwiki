import React from "react";
import { Box, Paper, MenuList, MenuItem } from "@material-ui/core";
import "./PageNav.css";

function PageNav(props) {
  return (
    <Box>
      <Paper className="page-nav">
        <MenuList>
          {props.links.length > 0 &&
            props.links.map(link => {
              return <MenuItem>{link}</MenuItem>;
            })}
        </MenuList>
      </Paper>
    </Box>
  );
}

export default PageNav;
