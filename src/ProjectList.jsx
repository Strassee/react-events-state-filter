export default function ProjectList(props) {
    const projects = props.projects;
    let result = [];
    for (let i = 0; i < projects.length; i++) {
        result.push(<img src ={projects[i].img} key={i} className="list-item" alt={projects[i].category}/>);
    }
    return (
        <div className="project-list">
            {result} 
        </div>
    );

}