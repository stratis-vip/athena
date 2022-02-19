import styles from './admin.module.css'

const SelectTeam = ({teams,label, change,value}) => {

    if (label) {
        return (
            <label>{label}:
                <select className={styles.select} onChange={change} value={value}>
                    {teams && teams.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                </select></label>
        )
    }else {
        return  <select className={styles.select} onChange={change} value={value}>
            {teams && teams.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
        </select>
    }
}

export default SelectTeam
