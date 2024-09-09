export default function Toolbar(props) {

    const filters = props.filters;
    let result = [];
    for (let i = 0; i < filters.length; i++) {
        const className = 'button' + (filters[i] === props.selected ? ' active' : '');
        result.push(<button className= {className} onClick={props.onSelectFilter} key={i}>{filters[i]}</button>);
    }

    return (
        <div className="toolbar">
            {result}
        </div>
    );

}
