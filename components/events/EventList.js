import EventItem from "./EventItem"
import styles from './EventList.module.css'

const EventList = (props) => {
    const {items} = props
    return <ul className={styles.list}>{items.map((item) => (
        <EventItem 
            key={item.id}
            title={item.title} 
            date={item.date} image={item.image} location={item.location} 
            id={item.id} />
    ))}</ul>
}

export default EventList
