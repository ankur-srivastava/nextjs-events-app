import EventList from "../../components/events/EventList"
import { getFeaturedEvents } from "../../dummy_data"


const Events = () => {
    const featuredEvents = getFeaturedEvents()
    console.log(featuredEvents)
    return <div>
        <EventList items={featuredEvents} />
    </div>
}

export default Events
