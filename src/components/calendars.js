import React, { useState } from 'react'
import { PrimaryBtn } from './buttons'
import {
    TodayRounded as CalenderIcon,
    ChevronRightRounded as RightChevron,
} from '@material-ui/icons';
import { ChromePicker, } from 'react-color'
import { Modal } from './popups'
import { ListItem } from './lists'

export function AddToCalendar({ disabled = false, calendars, cb = () => { } }) {

    const [showCalenderOptions, setShowCalenderOption] = useState(false)

    return (
        <React.Fragment>
            <PrimaryBtn
                onClick={() => {
                    setShowCalenderOption(!showCalenderOptions)
                }}
                disabled={disabled}
            >
                Add To Calendar
                <CalenderIcon style={{ marginLeft: '.5em' }} />
            </PrimaryBtn>

            <Modal
                isVisible={showCalenderOptions}
                shade={true}
                close={() => setShowCalenderOption(!showCalenderOptions)}
            >
                <h3>Add To Calendar</h3>
                <ul>
                    {calendars && Object.entries(calendars).map(calendar => {
                        return (
                            <a
                                href={calendar[1]}
                                onClick={() =>
                                    cb()
                                }
                                key={calendar[0]}
                            >
                                <ListItem>
                                    <h4
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        {calendar[0] === 'ics' ? 'Apple Calendar' : calendar[0]}
                                    </h4>
                                    <RightChevron />
                                </ListItem>
                            </a>
                        )
                    })}
                </ul>
            </Modal>
        </React.Fragment>
    )
}