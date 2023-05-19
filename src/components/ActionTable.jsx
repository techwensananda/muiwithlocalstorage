import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ViewArrayOutlinedIcon from "@mui/icons-material/ViewArrayOutlined";
import { Box, Button, ButtonGroup, Divider, FormControl, InputAdornment, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
function ActionTable(props) {
  const { visible, setUseropen, selectedRows ,setsearchText,searchText} = props||{};
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation()
  const url = location.pathname.slice(1,location.pathname.length).replace(location.pathname.charAt(1),location.pathname.charAt(1).toUpperCase())
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <Box   sx={{ display:'flex' }} className="pageAction">
      <Box className="pageSearch">
        <Box className="formField" variant="no">
          <FormControl size="small">
            <OutlinedInput
     
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              }
              placeholder="Search"
              type="search"
            />
          </FormControl>
        </Box>
      </Box>
      <Box className="">
        <ButtonGroup
        //   variant="outlined"
        //   color="gray"
          aria-label="outlined button group"
        >
          <Tooltip title="Filter">
            <Button>
              <FilterAltOutlinedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Column Manage">
            <Button>
              <ViewArrayOutlinedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Import/Export">
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ImportExportIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <FileDownloadOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Export</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={()=>navigate('/import',{state:url})}>
            <ListItemIcon>
              <FileUploadOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Import</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <Box className=""></Box>
    </Box>
  );
}

export default ActionTable;
