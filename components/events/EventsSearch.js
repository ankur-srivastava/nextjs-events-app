import { useRef } from 'react'
import Button from '../ui/Button'
import styles from './EventsSearch.module.css'

const EventsSearch = (props) => {
    const yearRef = useRef()
    const monthRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const selectedYear = yearRef.current.value
        const selectedMonth = monthRef.current.value

        props.onSearch(selectedYear, selectedMonth)
    }

    return <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
            <div className={styles.control}>
                <label htmlFor="year">Year</label>
                <select id="year" ref={yearRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={styles.control}>
                <label htmlFor="month">Month</label>
                <select id="month" ref={monthRef}>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form>
}

export default EventsSearch
