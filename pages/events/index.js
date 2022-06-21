import EventList from "../../components/events/EventList"
import { getAllEvents } from "../../dummy_data"


const Events = () => {
    const events = getAllEvents()

    return <div>
        <EventList items={events} />
    </div>
}

export default Events
