import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import { useState } from 'react';

export default function Portfolio(props) {
    const projectsList = props.data;
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [filter, setFilter] = useState(filters[0]);
    const [filteredProjectList, setProjectList] = useState(projectsList);
  
    const SelectFilter = (event) => {
        const selected = event.target.textContent;
        setFilter(selected);
        selected === "All" ? setProjectList(projectsList) : setProjectList(projectsList.filter((item) => item.category === selected));
    };

    return (
        <div className="main-content">
            <Toolbar filters={filters} selected={filter} onSelectFilter={SelectFilter}/>
            <ProjectList projects={filteredProjectList} />
        </div>
    );

}
