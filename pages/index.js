import { useRouter } from 'next/router'
import EventList from "../components/events/EventList"
import EventsSearch from "../components/events/EventsSearch"
import { getFeaturedEvents } from "../dummy_data"

const HomePage = () => {
    const router = useRouter()
    const handleSearch = (year, month) => {
        const path = `/events/${year}/${month}`
        router.push(path)
    }
    const featuredEvents = getFeaturedEvents()
    
    return <div>
        <EventsSearch onSearch={handleSearch}/>
        <EventList items={featuredEvents} />
    </div>
}

export default HomePage
