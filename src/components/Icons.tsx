
interface IProps {
    className?: string
}

export const SearchIcon: React.FC<IProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    )
}

export const NotFoundIcon: React.FC<IProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M7 8.5l3 3"></path>
            <path d="M7 11.5l3 -3"></path>
            <path d="M14 8.5l3 3"></path>
            <path d="M14 11.5l3 -3"></path>
            <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
        </svg>
    )
}