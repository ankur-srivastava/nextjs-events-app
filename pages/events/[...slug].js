import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/ResultsTitle'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/ErrorAlert'
import { getFilteredEvents } from '../../dummy_data'

const FilteredEvents = () => {
    const router = useRouter()
    const filterData = router.query.slug

    // filterData - an array of values
    // Loads two times. First time undefined
    if(!filterData) {
        return <p className='center'>Loading ...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numericYear = +filteredYear
    const numericMonth = +filteredMonth

    if(isNaN(numericYear) || isNaN(numericMonth)) {
        return <Fragment>
            <ErrorAlert><p>Invalid Values</p></ErrorAlert>
            <div className='center'>
                <Button link='/'>All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year: numericYear,
        month: numericMonth
    })

    const date = new Date(numericYear, numericMonth - 1)

    if(!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert><p>No Events Found</p></ErrorAlert>
            <div className='center'>
                <Button link='/'>All Events</Button>
            </div>
        </Fragment>
    }

    return <Fragment>
        <ResultsTitle date = {date}/>
        <EventList items={filteredEvents} />
    </Fragment>
}

export default FilteredEvents
