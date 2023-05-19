import { NavLink } from "react-router-dom";

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
]

const Categories = ({ category,onSelect }) => {

    return(
        <div className="flex gap-x-2 p-1">
            {
                categories.map(c=>
                    <NavLink
                    to={c.name ==='all' ? '/' : `/${c.name}`} 
                    key={c.name}
                    className={`${c.name === category ? 'bg-slate-700' : 'bg-slate-500 '} text-white p-2 border rounded `}
                    onClick={()=>onSelect(c.name)}
                    >
                        {c.text}
                    </NavLink>
        )
    }
        </div>
    )
}

export default Categories;