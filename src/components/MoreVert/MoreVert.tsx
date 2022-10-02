import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ClickAwayListener } from '@mui/material';

const MoreVert = (props: any) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<PopperPlacementType>();

    const handleClickAway = () => {
        setOpen(false)
    }

    const deleteItem = () => {
        props.deleteFunction(props.id)
    }

    const handleClick =
        (newPlacement: PopperPlacementType) =>
            (event: React.MouseEvent<HTMLButtonElement>) => {
                setAnchorEl(event.currentTarget);
                setOpen((prev) => !prev);
                setPlacement(newPlacement);
            };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <IconButton aria-label="settings" onClick={handleClick('right-end')}>
                <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography sx={{ p: 1 }}>
                                    <EditIcon style={{ cursor: "pointer", marginRight: "8px" }} />
                                    <DeleteForeverIcon onClick={deleteItem} style={{ cursor: "pointer" }} color={"error"} />
                                </Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <MoreVertIcon />
            </IconButton>
        </ClickAwayListener>

    );
}

export default MoreVert;