import styles from '../../styles/Home.module.css';


const ProjectSection = ({children})=>{

    return( 
        <section className={styles.project_wrapper}>
            {children}
        </section>
    )

}

export default ProjectSection;