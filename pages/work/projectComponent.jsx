import styles from '../../styles/Home.module.css';


const Project = ({children})=>{
    return(
        <div className={styles.project_component}>
            {children}
        </div>
    )
}

export default Project;