import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal"
import { useDispatch, useSelector } from "react-redux"

export const JournalPage = () => {
    
    const dispatch = useDispatch();

    const {isSaving, active} = useSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }
    
    return (
        <JournalLayout>
            
            {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non numquam obcaecati, officiis illo repudiandae voluptatem fugiat. Minus, velit iusto nostrum, perferendis sint illum et laudantium vero repudiandae accusantium consequatur quaerat.</Typography> */}

            {
                // active != null
                (!!active)
                ? <NoteView />
                : <NothingSelectedView />
            }
            
            {/* <NothingSelectedView />
            <NoteView /> */}

            <IconButton
                onClick={onClickNewNote}
                size="large"
                disabled={isSaving}
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    bottom: 50,
                    right: 50
                }}
            >
                <AddOutlined sx={{fontSize: 30}} />
            </IconButton>

        </JournalLayout>
    )
}
