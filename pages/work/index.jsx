import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';
import AnimatePresence from '../../components/motionPresence'
import Project from './projectComponent'
import ProjectSection from './projectSection';

const Work = ()=> {
    return (
            <Layout>
                <AnimatePresence>
                    <Project>
                        <ProjectSection>
                            <div style={{ background:'#d4f1f4',height:'100vh' }}>
                                this a container
                            </div>
                        </ProjectSection>
                        <ProjectSection>
                            <div style={{ background:'#75e6da',height:'100vh' }}>
                                this a container
                            </div>
                        </ProjectSection>
                        <ProjectSection>
                            <div style={{ background:'#189ab4',height:'100vh' }}>
                                this a container
                            </div>
                        </ProjectSection>
                        <ProjectSection>
                            <div style={{ background:'#05445e',height:'100vh' }}>
                                this a container
                            </div>
                        </ProjectSection>
                    </Project>
                </AnimatePresence>
            </Layout>
    );
}

export default Work;