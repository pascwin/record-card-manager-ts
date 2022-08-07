import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MoreVert = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();

    const hideMoreVert = () => {
        setOpen(false)
        return
    }

    useEffect(() => {
        setTimeout(hideMoreVert, 3500)
    }, [open])

    const handleClick =
        (newPlacement: PopperPlacementType) =>
            (event: React.MouseEvent<HTMLButtonElement>) => {
                setAnchorEl(event.currentTarget);
                setOpen((prev) => placement !== newPlacement || !prev);
                setPlacement(newPlacement);
            };

    return (
        <IconButton aria-label="settings" onClick={handleClick('right-end')}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography sx={{ p: 1 }}>
                                <EditIcon style={{cursor: "pointer", marginRight: "8px" }} />
                                <DeleteForeverIcon style={{cursor: "pointer"}} color={"error"} />
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <MoreVertIcon />
        </IconButton>
    );
}

export default MoreVert;