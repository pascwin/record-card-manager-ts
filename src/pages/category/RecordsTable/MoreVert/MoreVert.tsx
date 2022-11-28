import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClickAwayListener from '@mui/material/ClickAwayListener';

type MoreVertProps = {
    edit?: () => void;
    delete?: () => void;
}

const MoreVert = (props: MoreVertProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [placement, setPlacement] = useState<PopperPlacementType>();
    const [open, setOpen] = useState(false)

    const handleClickAway = () => {
        setOpen(false);
    };

    const handleClick =
        (newPlacement: PopperPlacementType) =>
            (event: React.MouseEvent<HTMLButtonElement>) => {
                setAnchorEl(event.currentTarget);
                setPlacement(newPlacement);
                setOpen((prev) => !prev);
            };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <IconButton aria-label="settings" onClick={handleClick('right-end')}>
                <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography sx={{ p: 1 }}>
                                    <EditIcon style={{ cursor: "pointer", marginRight: "8px" }} onClick={props.edit}/>
                                    <DeleteForeverIcon style={{ cursor: "pointer" }} color={"error"} onClick={props.delete}/>
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